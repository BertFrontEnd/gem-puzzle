import { gameContainer } from './elements.js';

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
  document.querySelector('.pop-up').remove();
};

export { disableButton, addPopUp, removePopUp };
