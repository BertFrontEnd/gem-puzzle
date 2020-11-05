// Import

import { gamePlayPause, toReplace, toDrag } from './assets/module/elements.js';
import { toPlayPause } from './assets/module/controls.js';
import { setTime, pauseTime, resetTime } from './assets/module/timer.js';
import { dragoverHandler, dropHandler, dragstartHandler, dragendHandler } from './assets/module/handlers.js';

// Variables
/* let second = 0;
let minute = 0;
let result = '';
let currentTime = ''; */

// Handlers

gamePlayPause.addEventListener('click', toPlayPause);
gamePlayPause.addEventListener('click', setTime);
gamePlayPause.addEventListener('click', pauseTime);

/* toReplace.addEventListener('dragstart', dragstartHandler);
toReplace.addEventListener('dragend', dragendHandler);

toDrag.addEventListener('drop', dropHandler);
toDrag.addEventListener('dragover', dragoverHandler); */
