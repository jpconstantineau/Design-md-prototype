// Keep standalone theme pages in sync with the shared playground.
const fs = require('node:fs');
require('./build-catalog-themes.cjs');
const source = fs.readFileSync('index.html', 'utf8');
const pages = [
  { theme: 'composio-light', name: 'Composio Light', accent: '#0007cd' },
  { theme: 'composio-dark', name: 'Composio Dark', accent: '#0007cd' },
  { theme: 'sentry', name: 'Sentry', accent: '#1f1633' },
  { theme: 'meta', name: 'Meta', accent: '#0064e0' }
];
for (const { theme, name, accent } of pages) {
  const html = source
    .replace('<html lang="en">', `<html lang="en" data-theme="${theme}" data-default-theme="${theme}">`)
    .replace('<title>CSS Color Scheme Playground</title>', `<title>${name} — Color Scheme Playground</title>`)
    .replace('content="#3b82f6"', `content="${accent}"`)
    .replace('<h1>CSS Color Scheme Test Page</h1>', `<h1>${name} Theme Playground</h1>`);
  fs.writeFileSync(`${theme}.html`, html);
}
