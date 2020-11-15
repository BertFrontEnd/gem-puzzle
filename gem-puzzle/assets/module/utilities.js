import { gamePlayPause, gameShuffleField, gameContainer, gameFields } from './elements.js';

const disableButton = (e) => {
  e.target.disabled = true;

  setTimeout(function () {
    e.target.disabled = false;
  }, 1000);
};

const addPopUp = (content) => {
  gameContainer.insertAdjacentHTML('afterend', `<section class="pop-up">${content}</section>`);
};

const removePopUp = () => {
  if (document.querySelector('.pop-up')) {
    document.querySelector('.pop-up').remove();
  }
};

const setActiveField = (e) => {
  gameFields.forEach((element) => {
    element.classList.remove('active-field');
    e.target.classList.add('active-field');
  });
};

const setShuffleArray = (array) => {
  const copy = [...array];
  for (let i = 0; i < copy.length; i++) {
    let j = parseInt(Math.random() * copy.length);
    let temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
};

const disableButtonPlay = () => {
  gamePlayPause.disabled = false;
};

const disableButtonShuffle = () => {
  gameShuffleField.disabled = false;
};

const unableButtonShuffle = () => {
  gameShuffleField.disabled = true;
};

const setDroppable = (window.setDroppable = function (items) {
  items.forEach((item /* index */) => {
    if (!item.innerText) {
      item.setAttribute('ondrop', 'dropHandler();');
      item.setAttribute('ondragover', 'dragOverHandler();');
      item.setAttribute('class', 'empty');
      item.setAttribute('draggable', 'false');
    }
    return;
  });
});

const setDraggable = (window.setDraggable = function (items) {
  items.forEach((item) => {
    item.setAttribute('draggable', 'true');
    item.setAttribute('ondragstart', 'dragStartHandler();');
    item.setAttribute('ondragend', 'dragEndHandler();');
  });
});

const getState = (items) => {
  const content = [];
  items.forEach((item, i) => {
    content.push(item.innerText);
  });
  return content;
};

const getDimension = (state, amount) => {
  let j = 0;
  let arr = [];
  const { content } = state;
  for (let i = 0; i < amount; i++) {
    arr.push(content.slice(j, j + amount));
    j += amount;
  }

  return arr;
};

export {
  disableButton,
  addPopUp,
  removePopUp,
  setActiveField,
  setShuffleArray,
  disableButtonPlay,
  disableButtonShuffle,
  unableButtonShuffle,
  setDroppable,
  setDraggable,
  getState,
  getDimension,
};
