import { gameFields, gameContainer } from './elements.js';

let field = ``;
let allChips = ``;
let fieldNumbers = [];

const setGameField = (amount, width, height, size) => {
  gameContainer.textContent = '';
  field = '';
  fieldNumbers = [];

  for (let i = 0; i < amount; i++) {
    field += `<div class="chip"></div>`;
  }

  gameContainer.insertAdjacentHTML('afterbegin', field);
  allChips = document.querySelectorAll('.chip');

  for (let chip of allChips) {
    chip.style.width = `${width}px`;
    chip.style.height = `${height}px`;
    chip.style.fontSize = `${size}rem`;
  }

  for (let i = 1; i < amount; i++) {
    fieldNumbers.push(i);
  }

  fieldNumbers.push('');
  console.log(fieldNumbers);

  for (let i = 0; i < allChips.length; i++) {
    allChips[i].setAttribute('id', `${[i] < 10 ? '0' + [i] : i}`);
    console.log(allChips[i]);
  }

  allChips.forEach((chip, i) => {
    chip.innerText = fieldNumbers[i];
  });
};

const renderGameField = (e) => {
  switch (true) {
    case e.target.classList.contains('three'):
      setGameField(9, 90, 90, 3);
      break;
    case e.target.classList.contains('four'):
      setGameField(16, 67, 67, 2.75);
      break;
    case e.target.classList.contains('five'):
      setGameField(25, 53.2, 53.2, 2.5);
      break;
    case e.target.classList.contains('six'):
      setGameField(36, 44, 44, 2);
      break;
    case e.target.classList.contains('seven'):
      setGameField(49, 37.4, 37.4, 1.75);
      break;
    case e.target.classList.contains('eight'):
      setGameField(64, 32.5, 32.5, 1.5);
      break;
  }
  return;
};

export { renderGameField };
