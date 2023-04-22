const header = document.querySelector('header.header');

const burger = header.querySelector('.header__burger');

burger.addEventListener('click', () => {
  header.classList.add('js-menu-open')
})

const headerArrow = header.querySelector('.header__nav-arrow');

headerArrow.addEventListener('click', () => {
  header.classList.remove('js-menu-open')
})
