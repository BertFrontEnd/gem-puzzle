import { gameTime, gamePlayPause } from './elements.js';

// Variables

let second = 0;
let minute = 0;
let result = '';

// Functions

const setTime = () => {
  console.log('++second before: ', second);
  second++;
  console.log('++second after: ', second);
  console.log('---------------');

  if (gamePlayPause.classList.contains('pause')) {
    if (second == 60) {
      second = 0;
      minute = minute + 1;
    } else {
      minute = minute;
    }

    gameTime.value = `${minute < 10 ? '0' + minute : minute}:${
      second < 10 ? '0' + second : second
    }`;

    /* currentTime = gameTime.value; */

    result = window.setTimeout(setTime, 1000);
  } else {
    console.log('--second before: ', second);
    return second--;
  }
};

const resetTime = () => {
  window.clearTimeout(result);

  if (gamePlayPause.classList.contains('pause')) {
    gamePlayPause.classList.remove('pause');
  }

  gameTime.value = '00:00';
  second = 0;
  minute = 0;
};

export { setTime, resetTime };
