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




