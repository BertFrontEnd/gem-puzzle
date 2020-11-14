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

export { disableButton, addPopUp, removePopUp, setActiveField, setShuffleArray, disableButtonPlay, disableButtonShuffle, unableButtonShuffle };
