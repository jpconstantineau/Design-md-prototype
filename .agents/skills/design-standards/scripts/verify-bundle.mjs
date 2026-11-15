// Verify portable resource links and the exact vendored files. No network or dependencies.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, resolve, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(process.argv[2] || join(dirname(fileURLToPath(import.meta.url)), '..'));
const failures = [];
const manifest = JSON.parse(readFileSync(join(root, 'references/upstream/manifest.json'), 'utf8'));
for (const item of manifest.files) {
  const path = resolve(root, item.path);
  const rel = relative(root, path);
  if (rel.startsWith('..') || isAbsolute(rel)) {
    failures.push(`Manifest path leaves skill: ${item.path}`);
    continue;
  }
  if (!existsSync(path)) { failures.push(`Missing pinned file: ${item.path}`); continue; }
  const hash = createHash('sha256').update(readFileSync(path)).digest('hex');
  if (hash !== item.sha256) failures.push(`Pinned file changed: ${item.path}`);
}
let links = 0;
function inspect(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { inspect(path); continue; }
    if (!entry.name.endsWith('.md') || path === join(root, 'references/upstream/design-md-spec.md')) continue;
    const source = readFileSync(path, 'utf8').replace(/^(`{3,}|~{3,}).*\r?\n[\s\S]*?^\1\s*$/gm, '');
    for (const [, href] of source.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g)) {
      if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(href)) continue;
      const target = resolve(dirname(path), decodeURIComponent(href.split('#')[0]));
      const rel = relative(root, target);
      links++;
      if (rel.startsWith('..') || isAbsolute(rel) || !existsSync(target) || !statSync(target).isFile()) {
        failures.push(`Broken or nonportable link in ${relative(root, path)}: ${href}`);
      }
    }
  }
}
inspect(root);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${manifest.files.length} pinned files and ${links} local resource links.`);
  console.log('Not a DESIGN.md syntax validator or an accessibility assessment.');
}
