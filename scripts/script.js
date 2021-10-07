document.addEventListener('DOMContentLoaded', function (event) {
  initMobileMenu();
});

function initMobileMenu() {
  let navLinks = document.querySelectorAll('.js-nav-link');
  let burger = document.getElementById('burger');

  if (!navLinks.length) {
    return
  }

  navLinks.forEach((navLink) => {
    navLink.addEventListener('touchstart', (event) => {
      burger.checked = false;
    });

    navLink.addEventListener('click', (event) => {
      burger.checked = false;
    })
  })
}
