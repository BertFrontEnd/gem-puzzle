import { gameContainer } from './elements.js';
import { setShuffleArray, setDroppable, setDraggable, getState, getDimension } from './utilities.js';
import { dragOverHandler, dropHandler, dragStartHandler, dragEndHandler } from './handlers.js';

let field = ``;
let allChips = ``;
let fieldNumbers = [];

const getGameField = (amount, width, height, size, number) => {
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
  // console.log(fieldNumbers);

  let shuffled = setShuffleArray(fieldNumbers);
  allChips.forEach((chip, i) => {
    chip.innerText = shuffled[i];
  });

  for (let i = 0; i < allChips.length; i++) {
    allChips[i].setAttribute('id', `${[i] < 10 ? '0' + [i] : i}`);
    //  console.log(allChips[i]);
  }

  const state = {};

  state.content = getState(allChips);
  state.dimension = getDimension(state, number);

  console.log('The state content', state.content);
  console.log('The state dimension', state.dimension);

  setDroppable(allChips);
  setDraggable(allChips);

  dragOverHandler();
  dropHandler();
  dragStartHandler();
  dragEndHandler();
};

export { getGameField };
