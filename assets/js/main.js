
{

  const accordionItems = document.querySelectorAll('.accordion__item'); // список элементов аккордиона

  const toggleClass = (item) => item.classList.toggle('js-accordion-active');

  accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener('click', () => toggleClass(accordionItem));
  });

}

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

function activePopup (popup, classActive) {
  popup.classList.add(classActive);
  blockScrollBody();
}

function inactivePopup (popup, classActive) {
  popup.classList.remove(classActive);
  unblockScrollBody();
}

const popupCall = document.querySelector(".popup-call");

if (popupCall) {
  const popupCallActive = document.querySelector(".header__phone");
  const closePopupCall = popupCall.querySelector('.popup-call__close');

  const classActivePopupCall = 'js-popup-call-active';

  popupCallActive.addEventListener('click', () => {
    activePopup (popupCall, classActivePopupCall);
  });

  closePopupCall.addEventListener('click', () => {
    inactivePopup (popupCall, classActivePopupCall);
  })

  document.body.addEventListener('click', (evt) => {
    if (evt.target === popupCall) {
      inactivePopup (popupCall, classActivePopupCall);
    };
  })

}





let maskTime = new Inputmask("99:99");
maskTime.mask("[name='time']");


const popupFull = document.querySelector('.popup-full');

if (popupFull) {

  const popupActiveButtons = document.querySelectorAll('.js-popup-active');
  const closePopupFull = popupFull.querySelector('.popup-full__close');

  const classActivePopupFull = 'js-popup-full-active';

  popupActiveButtons.forEach(popupActiveButton => {
    popupActiveButton.addEventListener('click', () => {
      activePopup (popupFull, classActivePopupFull);
    })
  })

  document.body.addEventListener('click', (evt) => {
    if (evt.target === popupFull) {
      inactivePopup (popupFull, classActivePopupFull);
    };
  })


  closePopupFull.addEventListener('click', () => {
    inactivePopup (popupFull, classActivePopupFull);
  })




}



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


const html = document.querySelector('html');

const classBlockScroll = "js-block-scroll"

function blockScrollBody () {
  if ( !html.classList.contains(classBlockScroll) ) {
    html.classList.add(classBlockScroll);
  }
};

function unblockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  }
};

// function toggleScrollBody () {
//   html.classList.toggle(classBlockScroll);
//
// };

const phoneInputs = document.querySelectorAll('input[data-tel-input]');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g,"");
};

const onPhoneInput = (evt) => {
  const input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = "";
  let selectionStart = input.selectionStart;

  if ( !inputNumbersValue ) input.value = "";


  if ( input.value.length != selectionStart ) {
    if ( evt.data && /\D/g.test(evt.data) ) {
      input.value = formattedInputValue;
    }
    return;
  }

  if ( ["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1 ) {
    // Российские номера
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    if (inputNumbersValue[0] == "8") {
      phoneInputs[0].setAttribute("pattern", ".{17,}");
      console.log(phoneInputs[0].getAttribute("pattern"));
    }

    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
    }

    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
    }

    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
    }

    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
    }

// Не российские номера
  } else formattedInputValue = "+" + inputNumbersValue;

  input.value = formattedInputValue;
};

// Стирание первого символа
const onPhoneKeyDown = (evt) => {
  const input = evt.target;
  if (evt.keyCode == 8 && getInputNumbersValue(input).length == 1) {
    input.value = "";
  }
};

// Вставка цифр в любое место
const onPhonePaste = (evt) => {
  const pasted = evt.clipboardData || window.clipboardData;
  const input = evt.target;
  const inputNumbersValue = getInputNumbersValue(input);

  if (pasted) {
    const pastedText = pasted.getData("Text");
    if ( /\D/g.test(pastedText) ) {
      input.value = inputNumbersValue;
    }
  }
};

phoneInputs.forEach(input => {
  input.addEventListener('input', onPhoneInput);
  input.addEventListener("keydown", onPhoneKeyDown);
  input.addEventListener("paste", onPhonePaste);
});

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
