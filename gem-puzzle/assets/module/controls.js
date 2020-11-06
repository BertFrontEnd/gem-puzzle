import { gamePlayPause } from './elements.js';
console.log(gamePlayPause);

const toPlayPause = () => {
  if (gamePlayPause.classList.contains('play')) {
    gamePlayPause.classList.toggle('pause');
    console.log(gamePlayPause);
  }
};

export { toPlayPause };
