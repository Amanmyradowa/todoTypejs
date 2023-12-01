var doneDoNotIcon = document.getElementById("done-dont-icons");
var doNotIcon = document.querySelector(".do-not");
var done = document.querySelector(".done");
var todoItem = document.getElementById("todoItem");
var addBtn = document.getElementById("button");
var input = document.getElementById("input");

doneDoNotIcon.addEventListener("click", changeIcon);

function changeIcon() {
  todoItem.classList.toggle("text-decoration");
  done.classList.toggle("active");
  doNotIcon.classList.toggle("disactive");
}

function createTodoItem(todoText) {
  
  const todoItemElement = document.createElement('section');
  todoItemElement.classList.add('todo__row-container-row');
  todoItemElement.classList.add('bg-brown');

  const todoContent = document.createElement('div');
  todoContent.classList.add('w-full');
  todoContent.classList.add('py-15');
  todoContent.classList.add('px-20');

  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex');
  flexContainer.classList.add('justify-between');
  flexContainer.classList.add('items-center');

  const todoLeft = document.createElement('div');
  todoLeft.classList.add('todo__row-container__left');
  todoLeft.classList.add('flex');
  todoLeft.classList.add('items-center');

  const doneIcons = document.createElement('div');
  doneIcons.setAttribute('id', 'done-dont-icons');

  const doneIcon = document.createElement('span');
  doneIcon.classList.add('done');
  doneIcon.classList.add('w-30');
  doneIcon.classList.add('h-30');
  doneIcon.classList.add('border-2');
  doneIcon.classList.add('border-gray');
  doneIcon.classList.add('border-solid');
  doneIcon.classList.add('rounded-50');
  doneIcon.classList.add('justify-center');
  doneIcon.classList.add('items-center');
  doneIcon.setAttribute('id', 'done');

  const svgDone = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgDone.setAttribute('width', '11');
  svgDone.setAttribute('height', '10');
  svgDone.setAttribute('viewBox', '0 0 11 10');
  svgDone.setAttribute('fill', 'none');
  svgDone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const pathDone = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathDone.setAttribute('d', 'M9.73649 0.96967C10.0255 0.676777 10.4942 0.676777 10.7832 0.96967C11.0687 1.25897 11.0722 1.72582 10.7937 2.01947L4.88025 9.00973C4.87456 9.01693 4.86848 9.02381 4.86205 9.03033C4.573 9.32322 4.10437 9.32322 3.81532 9.03033L0.216784 5.38388C-0.0722613 5.09099 -0.0722613 4.61612 0.216784 4.32322C0.505829 4.03033 0.974464 4.03033 1.26351 4.32322L4.31638 7.41674L9.71686 0.992105C9.72295 0.984235 9.72951 0.976743 9.73649 0.969

}

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value === "") {
    alert("U must write something!");
  } else {
    todoItem.textContent = input.value;
  }
}
