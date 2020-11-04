import { toReplace, toDrag } from './assets/module/elements.js';
import {
  dragoverHandler,
  dropHandler,
  dragstartHandler,
  dragendHandler,
} from './assets/module/functions.js';

toReplace.addEventListener('dragstart', dragstartHandler);
