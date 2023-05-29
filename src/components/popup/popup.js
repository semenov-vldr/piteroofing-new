function activePopup (popup, classActive) {
  popup.classList.add(classActive);
  blockScrollBody();
}

function inactivePopup (popup, classActive) {
  popup.classList.remove(classActive);
  unblockScrollBody();

  popup.querySelector('form').reset();
}
