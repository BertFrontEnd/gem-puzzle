import { gamePlayPause, gameContainer } from './elements.js';
console.log(gamePlayPause);

const toPlayPause = () => {
  if (gamePlayPause.classList.contains('play')) {
    gamePlayPause.classList.toggle('pause');
    console.log(gamePlayPause);
  }
  if (gameContainer.classList.contains('pop-up')) {
    gameContainer.classList.remove('pop-up');
  } else {
    gameContainer.classList.add('pop-up');
  }
};

export { toPlayPause };
