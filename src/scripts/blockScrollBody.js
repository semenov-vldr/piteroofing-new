
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
