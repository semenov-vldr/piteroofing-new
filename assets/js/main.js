
const header = document.querySelector('header.header');

const burger = header.querySelector('.header__burger');

burger.addEventListener('click', () => {
  header.classList.add('js-menu-open');
})

const headerArrow = header.querySelector('.header__nav-arrow');

headerArrow.addEventListener('click', () => {
  header.classList.remove('js-menu-open');
})


// scroll
window.addEventListener('scroll', () => scrollHeader (header) );

let previousPosition = document.documentElement.scrollTop;
function scrollHeader (header) {
  let currentPosition = document.documentElement.scrollTop;

  if (previousPosition > currentPosition || window.scrollY < 100) {
    header.classList.remove('js-scroll');
  } else {
    header.classList.add('js-scroll');
  }
  previousPosition = currentPosition;
}
