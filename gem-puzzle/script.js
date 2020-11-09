// Import

import { renderGameField } from './assets/module/render.js';
import { gameControls, gamePlayPause, gameFields, toReplace, toDrag } from './assets/module/elements.js';
import { disableButton, addPopUp, removePopUp } from './assets/module/utilities.js';
import { toPlayPause } from './assets/module/controls.js';
import { setTime, resetTime } from './assets/module/timer.js';
import { dragoverHandler, dropHandler, dragstartHandler, dragendHandler } from './assets/module/handlers.js';

// Handlers

gamePlayPause.addEventListener('click', toPlayPause);
gamePlayPause.addEventListener('click', setTime);
gamePlayPause.addEventListener('click', () => {
  if (!gamePlayPause.classList.contains('pause')) {
    addPopUp('Pause');
  } else {
    removePopUp();
  }
});

for (let gameControl of gameControls) {
  gameControl.addEventListener('click', disableButton);
}

for (let gameField of gameFields) {
  gameField.addEventListener('click', resetTime);
  gameField.addEventListener('click', disableButton);
  gameField.addEventListener('click', renderGameField);
  gameField.addEventListener('click', removePopUp);
  gameField.addEventListener('click', toPlayPause);
  gameField.addEventListener('click', setTime);
}

/* toReplace.addEventListener('dragstart', dragstartHandler);
toReplace.addEventListener('dragend', dragendHandler);

toDrag.addEventListener('drop', dropHandler);
toDrag.addEventListener('dragover', dragoverHandler); */
