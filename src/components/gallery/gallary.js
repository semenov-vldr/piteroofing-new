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
