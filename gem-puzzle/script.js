// Import

import { renderGameField, renderShuffleGameField } from './assets/module/renders.js';
import { gameControls, gameShuffleField, gamePlayPause, gameActiveField, gameFields } from './assets/module/elements.js';
import {
  disableButton,
  addPopUp,
  removePopUp,
  setActiveField,
  disableButtonPlay,
  disableButtonShuffle,
  unableButtonShuffle,
} from './assets/module/utilities.js';
import { toPlayPause } from './assets/module/controls.js';
import { setTime, resetTime } from './assets/module/timer.js';

// Functions

// Handlers

gamePlayPause.addEventListener('click', toPlayPause);
gamePlayPause.addEventListener('click', setTime);
gamePlayPause.addEventListener('click', () => {
  if (!gamePlayPause.classList.contains('pause')) {
    addPopUp('Pause');
    unableButtonShuffle();
  } else {
    removePopUp();
    disableButtonShuffle();
  }
});

for (let gameControl of gameControls) {
  // gameControl.addEventListener('click', disableButton);
}

gameActiveField.addEventListener('click', setActiveField);

for (let gameField of gameFields) {
  gameField.addEventListener('click', resetTime);
  gameField.addEventListener('click', disableButton);
  gameField.addEventListener('click', renderGameField);
  gameField.addEventListener('click', removePopUp);
  gameField.addEventListener('click', toPlayPause);
  gameField.addEventListener('click', setTime);
  gameField.addEventListener('click', disableButtonShuffle);
  gameField.addEventListener('click', disableButtonPlay);
}

for (let field of document.querySelectorAll('.field')) {
  gameShuffleField.addEventListener('click', () => {
    renderShuffleGameField(field);
  });
}

gameShuffleField.addEventListener('click', resetTime);
gameShuffleField.addEventListener('click', toPlayPause);
gameShuffleField.addEventListener('click', setTime);
