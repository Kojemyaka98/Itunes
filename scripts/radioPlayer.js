export const radioPlayerInit = () => {
const radio = document.querySelector('.radio');
const radioCoverImg = document.querySelector('.radio-cover__img');
const radioHeaderBig = document.querySelector('.radio-header__big');
const radioNavigation = document.querySelector('.radio-navigation');
const radioItem = document.querySelectorAll('.radio-item');
const radioStop = document.querySelector('.radio-stop');

// аудио конструктор который будет создавать объект аудио

const audio = new Audio(); // создает объект и вернет его в нашу переменную аудио
audio.type = 'audio/aac';

radioStop.disabled = true; // блокируем кнопку play при открытии вкладки радио

const changeIconPlay = () => {
    if (audio.paused) {
        radio.classList.remove('play');
        radioStop.classList.add('fa-play');
        radioStop.classList.remove('fa-stop');
    } else {
        radio.classList.add('play');
        radioStop.classList.add('fa-stop');
        radioStop.classList.remove('fa-play');
    }
};

radioNavigation.addEventListener('change', event => {  //делегирование
    const target = event.target;
    const parrent = target.closest('.radio-item');
    radioItem.forEach(item => item.classList.remove('select'));

    parrent.classList.add('select'); // стиль кружка вокруг р.батт

     const title = parrent.querySelector('.radio-name').textContent;
     radioHeaderBig.textContent = title;

     const urlImg = parrent.querySelector('.radio-img').src;
     radioCoverImg.src = urlImg;

    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    audio.play();
    changeIconPlay();
});

radioStop.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    changeIconPlay();
});


};


/// добавить регулятор громкости https://www.youtube.com/watch?v=8-U-gC0iWeg&feature=youtu.be&t=3188