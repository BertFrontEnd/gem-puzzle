const dragoverHandler = (e) => {
  console.log('Dragover Handler');
  e.preventDefault;
};

const dropHandler = (e) => {
  console.log('Drop Handler');
  e.preventDefault;
  const data = e.dataTransfer.getData('text/plain');
  console.log(data);
  e.target.innerText = document.getElementById(data).innerText;
  document.getElementById(data).innerText = '';
};

const dragstartHandler = (ev) => {
  console.log('Dragstart Handler');
  ev.dataTransfer.setData('text/plain', ev.target.id);
};

const dragendHandler = (e) => {
  console.log('Dragend Handler');
  e.dataTransfer.clearData();
};

export { dragoverHandler, dropHandler, dragstartHandler, dragendHandler };
