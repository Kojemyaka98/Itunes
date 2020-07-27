import {musicPlayerInit } from './musicPlayer.js';
import {radioPlayerInit } from './radioPlayer.js';
import {videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')
//function to close previous tabs when switching to another

const deactivationPlayer = () => {
    temp.style.display = 'none';  //данной функцией будет убрана надпись во вкладках(при нажатии на них) "Медиа портал ЯТюнс"
    playerBtn.forEach(item => item.classList.remove('active')); //item - buttons
    playerBlock.forEach(item => item.classList.remove('active')); //item - blocks
}

// Стролочные функции позволяют не использовать фигурные скобки, если у нас всего 1 выражение в функции

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');

    }));

musicPlayerInit();
radioPlayerInit();
videoPlayerInit();