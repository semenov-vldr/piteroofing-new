
{

  let mySwiper;

  const swiperList = document.querySelectorAll('.gallery__slider');

  if (swiperList) createSwiper(swiperList);



  function createSwiper (swiperList) {
    swiperList.forEach(swiper => {

      mySwiper = new Swiper(swiper, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.slider-nav__next',
          prevEl: '.slider-nav__prev',
        },

        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   draggable: true,
        // },

        uniqueNavElements: true,

        //slidesPerView: 1.5,

        // Бесконечная прокрутка
        loop: true,

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        centeredSlides: true,

        // Отступ между слайдами
        //spaceBetween: 24,

        // Стартовый слайд
        initialSlide: 0,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },

          768: {
            slidesPerView: 1.5,
            spaceBetween: 150,  // 24
          },
        }

      });


      const images = swiper.querySelectorAll('.swiper-slide img');
      images.forEach(image => {
        image.setAttribute('data-src', image.src);
        image.setAttribute('data-fancybox', "gallery");
      });



    })



  };


}

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

{

  let mySwiper;

  const swiperList = document.querySelectorAll('.reviews__slider');

  if (swiperList) createSwiper(swiperList);



  function createSwiper (swiperList) {
    swiperList.forEach(swiper => {

      mySwiper = new Swiper(swiper, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.slider-nav__next',
          prevEl: '.slider-nav__prev',
        },

        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   draggable: true,
        // },

        uniqueNavElements: true,

        //slidesPerView: 1.5,

        // Бесконечная прокрутка
        loop: true,


        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        centeredSlides: true,

        // Отступ между слайдами
        //spaceBetween: 24,

        // Стартовый слайд
        initialSlide: 0,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },

          480: {
            slidesPerView: 1.5,
          },


          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },

          1100: {
            slidesPerView: 2.5,
            spaceBetween: 40,  // 24
          },
        }

      });


      const images = swiper.querySelectorAll('.swiper-slide img');
      images.forEach(image => {
        image.setAttribute('data-src', image.src);
        image.setAttribute('data-fancybox', "gallery");
      });



    })



  };


}

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
