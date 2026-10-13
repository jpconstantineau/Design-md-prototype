const themeMap = {
  light: {
    label: 'Light',
    accent: '#3b82f6'
  },
  dark: {
    label: 'Dark',
    accent: '#7aa2ff'
  },
  sunset: {
    label: 'Sunset',
    accent: '#f97316'
  },
  ocean: {
    label: 'Ocean',
    accent: '#38bdf8'
  },
  'hmi-light': {
    label: 'HMI Light', accent: '#d4d6d8'
  },
  'hmi-dark': {
    label: 'HMI Dark', accent: '#202428'
  },
  'hmi-light-cvd': {
    label: 'HMI Light (color-blind)', accent: '#d4d6d8'
  },
  'hmi-dark-cvd': {
    label: 'HMI Dark (color-blind)', accent: '#202428'
  },
  'composio-light': {
    label: 'Composio Light', accent: '#0007cd'
  },
  'composio-dark': {
    label: 'Composio Dark', accent: '#0007cd'
  },
  sentry: {
    label: 'Sentry', accent: '#1f1633'
  },
  meta: {
    label: 'Meta', accent: '#0064e0'
  }
};

const root = document.documentElement;
const buttons = [...document.querySelectorAll('[data-theme-option]')];

function applyTheme(themeName) {
  if (!Object.hasOwn(themeMap, themeName)) themeName = 'light';
  const chosenTheme = themeMap[themeName];
  root.setAttribute('data-theme', themeName);

  buttons.forEach((button) => {
    const isActive = button.dataset.themeOption === themeName;
    button.classList.toggle('is-active', isActive);
    if (button.tagName === 'A') {
      if (isActive) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    } else {
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
  });

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute('content', chosenTheme.accent);
  }
  updateStyleReadout();
  renderPalette();
}

function updateStyleReadout() {
  const tokens = getComputedStyle(root);
  document.querySelectorAll('[data-style-token]').forEach((element) => {
    element.textContent = tokens.getPropertyValue(element.dataset.styleToken).trim();
  });
  document.querySelectorAll('[data-radius-selector]').forEach((element) => {
    const component = document.querySelector(element.dataset.radiusSelector);
    element.textContent = getComputedStyle(component).borderRadius;
  });
}
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', updateStyleReadout);

const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const queryTheme = new URLSearchParams(window.location.search).get('theme');
applyTheme(queryTheme || root.dataset.defaultTheme || preferredTheme);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.tagName === 'A') return;
    if (root.dataset.defaultTheme) {
      window.location.href = `index.html?theme=${button.dataset.themeOption}`;
      return;
    }
    applyTheme(button.dataset.themeOption);
    const url = new URL(window.location.href);
    url.searchParams.set('theme', button.dataset.themeOption);
    window.history.replaceState(null, '', url);
  });
});
