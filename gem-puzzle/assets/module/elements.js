const gameBody = document.querySelector('body');
const gameTime = document.querySelector('.time');
const gameControls = document.querySelectorAll('.controls > .control');
const gamePlayPause = document.querySelector('.play');
const gameFields = document.querySelectorAll('.fields > .field');
const toReplace = document.getElementById('replace');
const toDrag = document.getElementById('drag');

export {
  gameBody,
  gameTime,
  gameControls,
  gamePlayPause,
  gameFields,
  toReplace,
  toDrag,
};
