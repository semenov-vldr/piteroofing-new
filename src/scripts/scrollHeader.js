let previousPosition = document.documentElement.scrollTop;
function scrollHeader (header) {
  let currentPosition = document.documentElement.scrollTop;

  if (previousPosition > currentPosition || window.scrollY < 100) {
    header.classList.remove('js-scroll');
    header.classList.add('js-header-bg');
  } else {
    header.classList.add('js-scroll');
    header.classList.remove('js-header-bg');
  }

  if (window.scrollY < 100) {
    header.classList.remove('js-header-bg');
  }

  previousPosition = currentPosition;





}
