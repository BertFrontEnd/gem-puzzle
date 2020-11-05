import { gamePlayPause } from './elements.js';

const isPlayPause = (e) => {
  /*   if (gamePlayPause.classList.contains('play')) {
    gamePlayPause.style.backgroundImage = `url(./assets/images/control/pause.svg)`;
    console.log(gamePlayPause);
  } else {
    gamePlayPause.style.backgroundImage = `url(./assets/images/control/play.svg)`;
    console.log(gamePlayPause);
  } */

  if (e.target.classList.contains('play')) {
    gamePlayPause.classList.toggle('pause');
    console.log(gamePlayPause);
  }
};

export { isPlayPause };
