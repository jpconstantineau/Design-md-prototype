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
  }
};

const root = document.documentElement;
const buttons = [...document.querySelectorAll('[data-theme-option]')];

function applyTheme(themeName) {
  const chosenTheme = themeMap[themeName] || themeMap.light;
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
