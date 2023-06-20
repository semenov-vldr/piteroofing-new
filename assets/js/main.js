
{

  const accordionItems = document.querySelectorAll('.accordion__item'); // список элементов аккордиона

  const toggleClass = (item) => item.classList.toggle('js-accordion-active');

  accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener('click', () => toggleClass(accordionItem));
  });

}

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
        image.setAttribute('data-fancybox', "images-index");
      });

    })


  };


}

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



const loader = document.querySelector('.loader');

if (loader) {

  function hideLoader () {
    loader.classList.add('hide');
    setTimeout(() => {
      loader.remove();
    }, 500)
  };

  window.addEventListener('load', hideLoader);
}

function activePopup (popup, classActive) {
  popup.classList.add(classActive);
  blockScrollBody();
}

function inactivePopup (popup, classActive) {
  popup.classList.remove(classActive);
  unblockScrollBody();

  popup.querySelector('form').reset();
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



// Подключен axios.min.js в шаблоне

  const TOKEN = "6031545253:AAHPW5wVsvWNQoCWuLIstUvjHCbKPkbUC3c";
  const CHAT_ID = "-1001818251069";
  const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

  const formFull = popupFull.querySelector('.popup-full__form');
  const formCall = popupCall.querySelector('.popup-call__form');

  if (formFull) formFull.addEventListener('submit', (evt) => {
    sendMsgTelegram(evt);
    inactivePopup (popupFull, 'js-popup-full-active');
  });


  if (formCall) formCall.addEventListener('submit', (evt) => {
    sendMsgTelegram(evt);
    inactivePopup (popupCall, 'js-popup-call-active');
  });


  function sendMsgTelegram (evt) {
    evt.preventDefault();
    const form = evt.target;

    let message = `<b>Заявка с сайта SPB</b>\n`;

    message += `<b>Имя отправителя:</b> ${ form.name.value }\n`;
    message += `<b>Телефон:</b> ${ form.phone.value }\n`;

    if (evt.target === formFull) {
      message += `<b>Экскурсия:</b> ${ form.excursions.value }\n`;
      message += `<b>Формат:</b> ${ form.format.value }\n`;
      message += `<b>Дата:</b> ${ form.date.value }\n`;
      message += `<b>Кол-во чел:</b> ${ form.count.value }\n`;
      message += `<b>Время:</b> ${ form.time.value }\n`;
      message += `<b>Способ связи:</b> ${ form.communication.value }\n`;
    }

    //message += `<b>Сообщение:</b> ${ this.message.value }\n`;

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
      .then(() => {
        console.log('Заявка успешно отправлена');
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log('Конец');
      });
    alert('Заявка отправлена успешно');
  };


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

const errorAlert = document.querySelector('.error');

if (errorAlert) {

  const closeError = errorAlert.querySelector('.error__button');

  closeError.addEventListener('click', () => {
    errorAlert.classList.add('js-error-close');
  })

}



const successAlert = document.querySelector('.success');

if (successAlert) {

  const closeSuccess = successAlert.querySelector('.success__button');

  closeSuccess.addEventListener('click', () => {
    successAlert.classList.add('js-success-close');
  })

}



function alertSuccessCreate (alert) {

  //const alert = document.querySelector('.error');

  if (errorAlert) {

    const closeError = errorAlert.querySelector('.error__button');

    closeError.addEventListener('click', () => {
      errorAlert.classList.add('js-error-close');
    })

  }




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
    if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    if (inputNumbersValue[0] === "8") {
      //phoneInputs[0].setAttribute("pattern", ".{17,}");
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
  if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
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
