// Import

let { renderGameBody } = await import('./assets/module/render.js');
import {
  gameControls,
  gamePlayPause,
  gameFields,
  toReplace,
  toDrag,
} from './assets/module/elements.js';
import { disableButton } from './assets/module/utilities.js';
import { toPlayPause } from './assets/module/controls.js';
import { setTime, resetTime } from './assets/module/timer.js';
import {
  dragoverHandler,
  dropHandler,
  dragstartHandler,
  dragendHandler,
} from './assets/module/handlers.js';

// Variables

// Handlers

document.addEventListener('DOMContentLoaded', renderGameBody);

/* document.addEventListener('DOMContentLoaded', async () => {
  await renderGameBody();
}); */

gamePlayPause.addEventListener('click', toPlayPause);
gamePlayPause.addEventListener('click', setTime);

for (let gameControl of gameControls) {
  gameControl.addEventListener('click', disableButton);
}

/* gamePlayPause.addEventListener('click', disableButton); */

for (let gameField of gameFields) {
  gameField.addEventListener('click', resetTime);
  gameField.addEventListener('click', disableButton);
}

/* toReplace.addEventListener('dragstart', dragstartHandler);
toReplace.addEventListener('dragend', dragendHandler);

toDrag.addEventListener('drop', dropHandler);
toDrag.addEventListener('dragover', dragoverHandler); */
