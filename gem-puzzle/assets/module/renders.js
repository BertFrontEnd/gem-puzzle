import { getGameField } from './fields.js';

const renderGameField = (e) => {
  switch (true) {
    case e.target.classList.contains('three'):
      getGameField(9, 90, 90, 3);
      break;
    case e.target.classList.contains('four'):
      getGameField(16, 67, 67, 2.75);
      break;
    case e.target.classList.contains('five'):
      getGameField(25, 53.2, 53.2, 2.5);
      break;
    case e.target.classList.contains('six'):
      getGameField(36, 44, 44, 2);
      break;
    case e.target.classList.contains('seven'):
      getGameField(49, 37.4, 37.4, 1.75);
      break;
    case e.target.classList.contains('eight'):
      getGameField(64, 32.5, 32.5, 1.5);
      break;
  }
  return;
};

const renderShuffleGameField = (field) => {
  switch (true) {
    case field.classList.contains('three') && field.classList.contains('active-field'):
      getGameField(9, 90, 90, 3);
      break;
    case field.classList.contains('four') && field.classList.contains('active-field'):
      getGameField(16, 67, 67, 2.75);
      break;
    case field.classList.contains('five') && field.classList.contains('active-field'):
      getGameField(25, 53.2, 53.2, 2.5);
      break;
    case field.classList.contains('six') && field.classList.contains('active-field'):
      getGameField(36, 44, 44, 2);
      break;
    case field.classList.contains('seven') && field.classList.contains('active-field'):
      getGameField(49, 37.4, 37.4, 1.75);
      break;
    case field.classList.contains('eight') && field.classList.contains('active-field'):
      getGameField(64, 32.5, 32.5, 1.5);
      break;
  }
  return;
};

export { renderGameField, renderShuffleGameField };
