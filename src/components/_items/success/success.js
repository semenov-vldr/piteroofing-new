const successAlert = document.querySelector('.success');

if (successAlert) {

  const closeSuccess = successAlert.querySelector('.success__button');

  closeSuccess.addEventListener('click', () => {
    successAlert.classList.add('js-success-close');
  })

}


