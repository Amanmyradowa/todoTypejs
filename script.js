var doneDoNotIcon = document.getElementById('done-dont-icons');
var doNotIcon = document.querySelector('.do-not');
var done = document.querySelector('.done');
var todoItem = document.getElementById('todoItem');
var addBtn = document.getElementById('button');
var input = document.getElementById('input');
doneDoNotIcon === null || doneDoNotIcon === void 0 ? void 0 : doneDoNotIcon.addEventListener('click', changeIcon);
function changeIcon() {
    todoItem === null || todoItem === void 0 ? void 0 : todoItem.classList.toggle('text-decoration');
    done === null || done === void 0 ? void 0 : done.classList.toggle('active');
    doNotIcon === null || doNotIcon === void 0 ? void 0 : doNotIcon.classList.toggle('disactive');
}
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', addTask);
function addTask() {
    if ((input === null || input === void 0 ? void 0 : input.value) === '') {
        alert("U must write something!");
    }
    else {
        console.log(input.value);
    }
}
