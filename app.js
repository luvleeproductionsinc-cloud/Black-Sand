const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 681px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
const lightbox = document.querySelector('.lightbox');
document.querySelector('.image-open').addEventListener('click', () => lightbox.showModal());
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
