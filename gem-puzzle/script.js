// Import

import { renderGameField } from './assets/module/render.js';

import { gameControls, gamePlayPause, gameFields, toReplace, toDrag } from './assets/module/elements.js';
import { disableButton } from './assets/module/utilities.js';
import { toPlayPause } from './assets/module/controls.js';
import { setTime, resetTime } from './assets/module/timer.js';
import { dragoverHandler, dropHandler, dragstartHandler, dragendHandler } from './assets/module/handlers.js';

// Variables

// Handlers

gamePlayPause.addEventListener('click', toPlayPause);
gamePlayPause.addEventListener('click', setTime);

for (let gameControl of gameControls) {
  gameControl.addEventListener('click', disableButton);
}

/* gamePlayPause.addEventListener('click', disableButton); */

for (let gameField of gameFields) {
  gameField.addEventListener('click', resetTime);
  gameField.addEventListener('click', disableButton);
  gameField.addEventListener('click', renderGameField);
}

/* toReplace.addEventListener('dragstart', dragstartHandler);
toReplace.addEventListener('dragend', dragendHandler);

toDrag.addEventListener('drop', dropHandler);
toDrag.addEventListener('dragover', dragoverHandler); */
