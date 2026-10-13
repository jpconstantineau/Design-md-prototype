// Read the actual active tokens, including gallery-scoped colors.
function renderPalette() {
  const rootStyle = getComputedStyle(document.documentElement);
  const galleryStyle = getComputedStyle(document.querySelector('.x-gallery'));
  const groups = [
    ['Surfaces & text', [
      ['--bg', 'Page canvas'], ['--surface', 'Panel surface'], ['--surface-strong', 'Raised surface'],
      ['--text', 'Main text'], ['--muted', 'Secondary text'], ['--border', 'Borders']
    ]],
    ['Brand & actions', [
      ['--primary', 'Primary action'], ['--primary-strong', 'Hover / pressed fill'],
      ['--secondary', 'Secondary action'], ['--accent', 'Accent'], ['--on-primary', 'Primary label'],
      ['--badge-accent', 'Primary badge accent'], ['--brand-blue', 'Composio brand blue'],
      ['--brand-glow', 'Composio spotlight'], ['--brand-cyan', 'Reference illustration cyan'],
      ['--brand-violet', 'Reference illustration violet'], ['--brand-lime', 'Sentry headline / divider'],
      ['--brand-pink', 'Sentry pink'], ['--brand-violet-link', 'Reference violet link'],
      ['--brand-violet-deep', 'Sentry select / spotlight'], ['--brand-violet-mid', 'Sentry border violet']
    ]],
    ['States & interaction', [
      ['--success', 'Success'], ['--warning', 'Warning'], ['--danger', 'Danger'],
      ['--alarm-low', 'Low-priority alarm'], ['--on-alarm', 'Alarm symbol'],
      ['--ring', 'Focus / ring'], ['--shadow', 'Shadow color'],
      ['--field-bg', 'Sentry input fill'], ['--field-ink', 'Sentry input text'],
      ['--field-border', 'Sentry input border'], ['--field-placeholder', 'Sentry placeholder'],
      ['--pressed-ink', 'Sentry pressed label'], ['--ghost-fill', 'Sentry ghost action']
    ]],
    ['Gallery-specific colors', [
      ['--x-deep', 'Code / recessed surface'], ['--x-link', 'Gallery links'],
      ['--x-focus', 'Gallery focus token'], ['--x-glow', 'Spotlight color'], ['--x-on-primary', 'Gallery action label']
    ], galleryStyle]
  ];
  const host = document.querySelector('#theme-palette');
  host.replaceChildren();
  for (const [title, tokens, scope = rootStyle] of groups) {
    const section = document.createElement('section');
    const heading = document.createElement('h4'); heading.textContent = title;
    const grid = document.createElement('div'); grid.className = 'swatch-grid';
    for (const [token, role] of tokens) {
      const color = scope.getPropertyValue(token).trim();
      if (!color || !CSS.supports('color', color)) continue;
      const swatch = document.createElement('div'); swatch.className = 'swatch palette-swatch';
      const patch = document.createElement('span'); patch.className = 'palette-patch'; patch.setAttribute('aria-hidden', 'true');
      const fill = document.createElement('span'); fill.style.backgroundColor = color; patch.append(fill);
      const info = document.createElement('div');
      const label = document.createElement('strong'); label.textContent = token;
      const value = document.createElement('code'); value.textContent = color;
      const description = document.createElement('small'); description.textContent = role;
      info.append(label, value, description); swatch.append(patch, info); grid.append(swatch);
    }
    if (grid.children.length) { section.append(heading, grid); host.append(section); }
  }
}
