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


