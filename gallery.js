const menu = document.querySelector('.x-menu');
const navLinks = document.querySelector('.x-nav-links');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navLinks.classList.toggle('is-open', open);
});
navLinks.addEventListener('click', event => {
  if (event.target.closest('a')) {
    menu.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  }
});
document.querySelector('#copy-example').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(document.querySelector('#example-code').textContent);
    status.textContent = 'Example copied.';
  } catch {
    status.textContent = 'Clipboard unavailable. Select and copy the example text above.';
  }
});
const key = document.querySelector('#sample-key');
const reveal = document.querySelector('#reveal-key');
reveal.addEventListener('click', () => {
  const show = key.type === 'password';
  key.type = show ? 'text' : 'password';
  reveal.textContent = show ? 'Hide' : 'Show';
  reveal.setAttribute('aria-pressed', String(show));
});
const form = document.querySelector('#sample-setup');
const email = document.querySelector('#sample-email');
const error = document.querySelector('#email-error');
const status = document.querySelector('#form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  const valid = email.validity.valid;
  error.hidden = valid;
  email.setAttribute('aria-invalid', String(!valid));
  status.textContent = valid ? 'Preview saved for this session. No data was sent.' : '';
  if (!valid) email.focus();
});
const search = document.querySelector('#workspace-search');
const workspaces = document.querySelector('#workspace-options');
const options = [...workspaces.options].map(option => option.textContent);
function filterWorkspaces() {
  const matching = options.filter(name => name.toLowerCase().includes(search.value.toLowerCase()));
  workspaces.replaceChildren(...matching.map(name => new Option(name, name)));
  workspaces.disabled = matching.length === 0;
  document.querySelector('#workspace-count').textContent = `${matching.length} workspaces available`;
}
search.addEventListener('input', filterWorkspaces);
form.addEventListener('reset', () => {
  error.hidden = true;
  email.removeAttribute('aria-invalid');
  status.textContent = '';
  key.type = 'password';
  reveal.textContent = 'Show';
  reveal.setAttribute('aria-pressed', 'false');
  search.value = '';
  filterWorkspaces();
});
function updateViewport() {
  const width = window.innerWidth;
  document.querySelector('#viewport-width').textContent = `${width}px`;
  document.querySelector('#viewport-range').textContent = width < 640 ? 'Mobile' : width < 1024 ? 'Tablet' : width <= 1280 ? 'Desktop' : 'Wide';
}
window.addEventListener('resize', updateViewport);
updateViewport();
