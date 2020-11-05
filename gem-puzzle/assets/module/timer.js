import { gamePlayPause, gameTime } from './elements.js';

// Variables

let second = 0;
let minute = 0;
let result = '';
/* let currentTime = ''; */

// Functions

const setTime = () => {
  second++;

  if (second == 60) {
    second = 0;
    minute = minute + 1;
  } else {
    minute = minute;
  }

  gameTime.value = `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;

  /* currentTime = gameTime.value; */

  result = window.setTimeout(setTime, 1000);
};

const pauseTime = () => {
  window.clearTimeout(setTime);
};

const resetTime = () => {
  window.clearTimeout(setTime);
  gameTime.value = '00:00';
};

export { setTime, pauseTime, resetTime };
