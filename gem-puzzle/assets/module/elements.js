const gameTime = document.querySelector('.time');
const gameControls = document.querySelectorAll('.controls > .control');
const gameShuffleField = document.querySelector('.shuffle');
const gamePlayPause = document.querySelector('.play');
const gameContainer = document.querySelector('.container');
const gameActiveField = document.querySelector('.fields');
const gameFields = document.querySelectorAll('.fields > .field');
const toReplace = document.getElementById('replace');
const toDrag = document.getElementById('drag');

export { gameTime, gameControls, gameShuffleField, gamePlayPause, gameActiveField, gameFields, gameContainer, toReplace, toDrag };
