const input = document.querySelector('.body__input');
const btnStart = document.querySelector('.body__start');
const btnSend = document.querySelector('.body__submit');
const btnGeo = document.querySelector('.body__btn_geo');
const dialog = document.querySelector('.body__chat_dialog')
const url = 'wss://echo-ws-service.herokuapp.com';
let websoket;
function writeToScreen(message) {
    dialog.innerHTML += message;
}
btnStart.addEventListener('click', () => {
    websoket = new WebSocket(url);
    websoket.onmessage = function (event) {
        writeToScreen(
            '<div class="body__chat_dialog_echo">'+ event.data + '</div>'
        )
    }
    websoket.onerror = function (event) {
        writeToScreen(
            '<div class="body__chat_dialog_error">Ошибка получения ответа</div>' + event.data
        )
    }
})
btnSend.addEventListener('click', () => {
const message = document.querySelector('.body__input').value;
writeToScreen('<div class="body__chat_dialog_message">'+ message + '</div>');
    websoket.send(message);
})
const error = () => {
   writeToScreen(
       '<div class="body__chat_dialog_error">Невозможно получить ваше местоположение</div>'
   )
}
btnGeo.addEventListener('click',() => {
    const success = (position) => {
        console.log('position', position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    }
    writeToScreen(
        '<div class="body__chat_dialog_message">Запрос геолокации</div>'
    )
    writeToScreen(
        '<div class="body__chat_dialog_echo_geo"><a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Карта с вашим местоположением</a></div>'
    )
})