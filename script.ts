let doneDoNotIcon: HTMLElement | null = document.getElementById('done-dont-icons');
let doNotIcon: HTMLElement | null = document.querySelector('.do-not');
let done: HTMLElement | null = document.querySelector('.done');
let todoItem: HTMLElement | null = document.getElementById('todoItem');
let addBtn: HTMLElement | null = document.getElementById('button');
const input = document.getElementById('input') as HTMLInputElement;



doneDoNotIcon?.addEventListener('click', changeIcon);

function changeIcon() {

  todoItem?.classList.toggle('text-decoration');

  done?.classList.toggle('active');

  doNotIcon?.classList.toggle('disactive');

}

addBtn?.addEventListener('click', addTask);

function addTask() {
  if(input?.value === '') {
    alert("U must write something!");
  }
  else{
    console.log(input.value);
    
  }
}
