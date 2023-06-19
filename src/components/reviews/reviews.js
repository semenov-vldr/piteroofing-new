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
            slidesPerView: 2,
          },


          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }

      });


      const images = swiper.querySelectorAll('.swiper-slide img');
      images.forEach(image => {
        image.setAttribute('data-src', image.src);
        image.setAttribute('data-fancybox', "images-reviews");
      });



    })



  };


}
