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
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute('content', chosenTheme.accent);
  }
}

const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(preferredTheme);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    applyTheme(button.dataset.themeOption);
  });
});
