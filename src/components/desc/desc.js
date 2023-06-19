new Swiper('.desc__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    prevEl: '.slider-nav__prev',
    nextEl: '.slider-nav__next',
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  // Откл функционала, если слайдов меньше, чем нужно
  watchOverflow: true,

  slidesPerView: 1,

  effect: "fade",

  // Отступ между слайдами
  spaceBetween: 16,

  // Стартовый слайд
  initialSlide: 0,

  loop: true,

});

const imagesDesc = document.querySelectorAll('.desc__slide img');

if (imagesDesc) {
  imagesDesc.forEach(image => {
    image.setAttribute('data-src', image.src);
    image.setAttribute('data-fancybox', "images-desc");
  });
}


