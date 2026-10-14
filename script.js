// El sitio inicia siempre en modo claro al recargar.
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme !== 'dark';
    if (isDark) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      delete document.documentElement.dataset.theme;
    }
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Activar tema claro' : 'Activar tema oscuro');
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#000000' : '#ffffff';
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
