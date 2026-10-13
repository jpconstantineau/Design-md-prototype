// Keep the two standalone theme pages in sync with the shared playground.
const fs = require('node:fs');
const source = fs.readFileSync('index.html', 'utf8');
for (const mode of ['light', 'dark']) {
  const theme = `composio-${mode}`;
  const name = `Composio ${mode === 'light' ? 'Light' : 'Dark'}`;
  const html = source
    .replace('<html lang="en">', `<html lang="en" data-theme="${theme}" data-default-theme="${theme}">`)
    .replace('<title>CSS Color Scheme Playground</title>', `<title>${name} — Color Scheme Playground</title>`)
    .replace('content="#3b82f6"', 'content="#0007cd"')
    .replace('<h1>CSS Color Scheme Test Page</h1>', `<h1>${name} Theme Playground</h1>`);
  fs.writeFileSync(`${theme}.html`, html);
}
