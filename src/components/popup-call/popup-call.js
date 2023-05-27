const popupCall = document.querySelector(".popup-call");
const popupCallButton = document.querySelector(".header__phone");
const closePopupCall = popupCall.querySelector('.popup-call__close');

popupCallButton.addEventListener('click', () => {
  popupCall.classList.add('js-popup-call-active');
});

closePopupCall.addEventListener('click', () => {
  popupCall.classList.remove('js-popup-call-active');
})

document.body.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup-call')) {
    popupCall.classList.remove('js-popup-call-active');
  };
})


