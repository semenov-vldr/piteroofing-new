const header = document.querySelector('header.header');

const burger = header.querySelector('.header__burger');

burger.addEventListener('click', () => {
  header.classList.add('js-menu-open');
  blockScrollBody();
});

const headerArrow = header.querySelector('.header__nav-arrow');
headerArrow.addEventListener('click', () => {
  header.classList.remove('js-menu-open');
  unblockScrollBody();
});

const navLinks = header.querySelectorAll('.header__nav-link');
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    header.classList.remove('js-menu-open');
    unblockScrollBody();
  })
});


// scroll
window.addEventListener('scroll', () => scrollHeader (header) );