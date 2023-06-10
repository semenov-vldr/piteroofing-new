{

  // Подключить axios.min.js в шаблоне

  const TOKEN = "6031545253:AAHPW5wVsvWNQoCWuLIstUvjHCbKPkbUC3c";
  const CHAT_ID = "-1001818251069";
  const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


  const formFull = popupFull.querySelector('.popup-full__form');

  if (formFull) formFull.addEventListener('submit', sendMsgTelegram);


  function sendMsgTelegram (evt) {
    evt.preventDefault();

    let message = `<b>Заявка с сайта SPB</b>\n`;

    message += `<b>Имя отправителя:</b> ${ this.name.value }\n`;
    message += `<b>Телефон:</b> ${ this.phone.value }\n`;
    message += `<b>Экскурсия:</b> ${ this.excursions.value }\n`;
    message += `<b>Формат:</b> ${ this.format.value }\n`;
    message += `<b>Дата:</b> ${ this.date.value }\n`;
    message += `<b>Кол-во чел:</b> ${ this.count.value }\n`;
    message += `<b>Время:</b> ${ this.time.value }\n`;

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


    inactivePopup (popupFull, 'js-popup-full-active');

    alert('Успешно')

  };



}
