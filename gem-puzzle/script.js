import { gamePlayPause, toReplace, toDrag } from './assets/module/elements.js';

import { isPlayPause } from './assets/module/controls.js';

import {
  dragoverHandler,
  dropHandler,
  dragstartHandler,
  dragendHandler,
} from './assets/module/handlers.js';

/* toReplace.addEventListener('dragstart', dragstartHandler);
toReplace.addEventListener('dragend', dragendHandler);

toDrag.addEventListener('drop', dropHandler);
toDrag.addEventListener('dragover', dragoverHandler); */

gamePlayPause.addEventListener('click', isPlayPause);
