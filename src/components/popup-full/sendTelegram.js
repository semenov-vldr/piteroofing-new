
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
    //alert('Успешно')
  };

