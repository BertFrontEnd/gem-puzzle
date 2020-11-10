import { gameContainer, gameFields } from './elements.js';

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

export { disableButton, addPopUp, removePopUp, setActiveField };
