const errorAlert = document.querySelector('.error');

if (errorAlert) {

  const closeError = errorAlert.querySelector('.error__button');

  closeError.addEventListener('click', () => {
    errorAlert.classList.add('js-error-close');
  })

}


