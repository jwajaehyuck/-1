const textInput = document.querySelector('.text-input');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

const ckbox = document.querySelector('.ck-input');
const addToDo = document.getElementById('addtodo');
const toDo = document.getElementById('todo');

const main = document.querySelector('.main');

textInput.addEventListener('keypress', pressEnter);

img1.addEventListener('click', clickImg1);

ckbox.addEventListener('click', clickCkBox);

addToDo.addEventListener('click', addtodolist);

img2.addEventListener('click', removeList);
