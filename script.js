const data = [
  {
    doing: ''
  }
]

let todoRowContainer = document.querySelector('.todo__row-container');
let doneDoNotIcon = document.getElementById("done-dont-icons");
let doNotIcon = document.querySelector(".do-not");
let done = document.querySelector(".done");
let addBtn = document.getElementById("button");
let input = document.getElementById("input");

// doneDoNotIcon.addEventListener("click", changeIcon);

function changeIcon() {
  todoItem.classList.toggle("text-decoration");
  done.classList.toggle("active");
  doNotIcon.classList.toggle("disactive");
}

addBtn.addEventListener("click", addTask);


function createTodoItem() {
  
  const todoItemElement = document.createElement('section');
  todoItemElement.setAttribute('class', 'todo__row-container-row');
  todoItemElement.setAttribute('class','bg-brown');
  todoItemElement.appendChild(todoRowContainer);

  const todoContent = document.createElement('div');
  todoContent.setAttribute('class', 'w-full');
  todoContent.setAttribute('class', 'py-15');
  todoContent.setAttribute('class', 'px-20');
  todoContent.appendChild(todoItemElement);

  const flexContainer = document.createElement('div');
  flexContainer.setAttribute('class', 'flex');
  flexContainer.setAttribute('class', 'justify-between');
  flexContainer.setAttribute('class', 'items-center');

  const todoLeft = document.createElement('div');
  todoLeft.setAttribute('class', 'todo__row-container__left');
  todoLeft.setAttribute('class', 'flex');
  todoLeft.setAttribute('class', 'items-center');

  const doneIcons = document.createElement('div');
  doneIcons.setAttribute('id', 'done-dont-icons');

  const doneIcon = document.createElement('span');
  doneIcon.setAttribute('class', 'done');
  doneIcon.setAttribute('class', 'w-30');
  doneIcon.setAttribute('class', 'h-30');
  doneIcon.setAttribute('class', 'border-2');
  doneIcon.setAttribute('class', 'border-gray');
  doneIcon.setAttribute('class', 'border-solid');
  doneIcon.setAttribute('class', 'rounded-50');
  doneIcon.setAttribute('class', 'justify-center');
  doneIcon.setAttribute('class', 'items-center');
  doneIcon.setAttribute('id', 'done');

}


function addTask() {
  if (input.value === "") {
    alert("U must write something!");
  } else {
    // todoItem.textContent = input.value;
    createTodoItem()
  }
  input.value = "";
}
