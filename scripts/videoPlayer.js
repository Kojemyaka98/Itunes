export const videoPlayerInit = () => {
// video-player
// video-button__play
// video-button__stop
// video-time__passed
// video-progress
// video-time__total

const videoPlayer = document.querySelector('.video-player');
const videoButtonPlay = document.querySelector('.video-button__play');
const videoButtonStop = document.querySelector('.video-button__stop');
const videoTimePassed = document.querySelector('.video-time__passed');
const videoProgress = document.querySelector('.time-progress');
const videoTimeTotal = document.querySelector('.video-time__total');


//ф-я смены значка play на pause и наоборот при воспроизведении видео
const toggleIcon = () => {
    if (videoPlayer.paused) {
        videoButtonPlay.classList.remove('fa-pause');
        videoButtonPlay.classList.add('fa-play');

    } else {
        videoButtonPlay.classList.add('fa-pause');
        videoButtonPlay.classList.remove('fa-play');
    }
}
//ф-я кликабельности 
const togglePlay = () => {
    if (videoPlayer.paused){
        videoPlayer.play();

    } else {
        videoPlayer.pause();
    }
    toggleIcon();
};
// функционал для кнопки стоп, при нажатии сброс видео в начальное положение
const stopPlay = () => {
 videoPlayer.pause();
 videoPlayer.currentTime = 0;
}


// условие ? (код который идет до :, если оно верно) : (условие неверно, тогда выполнится код справа )
const addZero = x => x < 10 ? '0' + x : x; //тернарный оператор
// добавление нуля при воспроизведении видео 00:01 и т.п

videoPlayer.addEventListener('click',togglePlay);



videoButtonPlay.addEventListener('click',togglePlay);
videoButtonStop.addEventListener('click', stopPlay);

/// продолжительность видео

videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime; // пройденное время
    const duration = videoPlayer.duration; // общая продолжительность

    videoProgress.value = (currentTime / duration) * 100; // сколько прошло времени( бегунок прокрутки)
    //current time
    let minutePassed = Math.floor(currentTime / 60); //секунды делим на минуты дабы получить вывод в минутах
    let secondPassed = Math.floor(currentTime % 60); //  остаток от деления
// duration
    let minuteTotal = Math.floor(duration / 60);
    let secondTotal = Math.floor(duration % 60);
// вывод продолжительности в самом плеере (мин/cек)
    videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondPassed);
    videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondTotal);
});

// возможность перелистывания 
videoProgress.addEventListener('change', () => {
const duration = videoPlayer.duration;
const value = videoProgress.value;

videoPlayer.currentTime = (value * duration) / 100; //

});
};