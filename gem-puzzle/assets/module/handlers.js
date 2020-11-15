import { setDroppable, setDraggable } from './utilities.js';

const dragOverHandler = (window.dragOverHandler = function (e) {
  /* e.preventDefault(); */
  console.log('Over');
});

const dropHandler = (window.dropHandler = function (e) {
  /* e.preventDefault(); */
  /*  const data = e.dataTransfer.getData('text/plain');
  e.target.innerText = document.getElementById(data).innerText;
  e.target.classList.remove('empty');
  e.target.setAttribute('ondrop', '');
  e.target.setAttribute('ondragover', '');
  document.getElementById(data).innerText = ''; */
  console.log('Drop');
});

const dragStartHandler = (window.dragStartHandler = function (e) {
  /* e.dataTransfer.setData('text/plain', e.target.id); */
  console.log('Start');
});

const dragEndHandler = (window.dragEndHandler = function (e) {
  /*  e.dataTransfer.clearData(); */

  setDroppable(document.querySelectorAll('.chip'));
  setDraggable(document.querySelectorAll('.chip'));

  console.log('End');
});

export { dragOverHandler, dropHandler, dragStartHandler, dragEndHandler };
