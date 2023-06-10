const header = document.querySelector('header.header');

if (header) {

  const burger = header.querySelector('.header__burger');

  burger.addEventListener('click', () => {
    header.classList.add('js-menu-open');
    blockScrollBody();

    //swipe
    if (header.classList.contains('js-menu-open')) {
      let mc = new Hammer(header);
      mc.on('swipeleft', closeMobileMenu);
    }
  });

  function closeMobileMenu () {
    header.classList.remove('js-menu-open');
    unblockScrollBody();
  };

  const headerArrow = header.querySelector('.header__nav-arrow');
  headerArrow.addEventListener('click', closeMobileMenu);

  const navLinks = header.querySelectorAll('.header__nav-link');
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', closeMobileMenu);
  });


// scroll
  window.addEventListener('scroll', () => scrollHeader (header) );


}


