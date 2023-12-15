const data = [
  {
    done:
      `<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.73649 0.96967C10.0255 0.676777 10.4942 0.676777 10.7832 0.96967C11.0687 1.25897 11.0722 1.72582 10.7937 2.01947L4.88025 9.00973C4.87456 9.01693 4.86848 9.02381 4.86205 9.03033C4.573 9.32322 4.10437 9.32322 3.81532 9.03033L0.216784 5.38388C-0.0722613 5.09099 -0.0722613 4.61612 0.216784 4.32322C0.505829 4.03033 0.974464 4.03033 1.26351 4.32322L4.31638 7.41674L9.71686 0.992105C9.72295 0.984235 9.72951 0.976743 9.73649 0.96967Z" fill="black"/>
      </svg>`,

    done:
      `<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.73649 0.96967C10.0255 0.676777 10.4942 0.676777 10.7832 0.96967C11.0687 1.25897 11.0722 1.72582 10.7937 2.01947L4.88025 9.00973C4.87456 9.01693 4.86848 9.02381 4.86205 9.03033C4.573 9.32322 4.10437 9.32322 3.81532 9.03033L0.216784 5.38388C-0.0722613 5.09099 -0.0722613 4.61612 0.216784 4.32322C0.505829 4.03033 0.974464 4.03033 1.26351 4.32322L4.31638 7.41674L9.71686 0.992105C9.72295 0.984235 9.72951 0.976743 9.73649 0.96967Z" fill="black"/>
      </svg>`,

    rename:
      `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1465 0.146447C12.3417 -0.0488155 12.6583 -0.0488155 12.8536 0.146447L15.8536 3.14645C16.0488 3.34171 16.0488 3.65829 15.8536 3.85355L5.85357 13.8536C5.80569 13.9014 5.74858 13.9391 5.68571 13.9642L0.68571 15.9642C0.500001 16.0385 0.287892 15.995 0.146461 15.8536C0.00502989 15.7121 -0.0385071 15.5 0.0357762 15.3143L2.03578 10.3143C2.06092 10.2514 2.09858 10.1943 2.14646 10.1464L12.1465 0.146447ZM11.2071 2.5L13.5 4.79289L14.7929 3.5L12.5 1.20711L11.2071 2.5ZM12.7929 5.5L10.5 3.20711L4.00001 9.70711V10H4.50001C4.77616 10 5.00001 10.2239 5.00001 10.5V11H5.50001C5.77616 11 6.00001 11.2239 6.00001 11.5V12H6.29291L12.7929 5.5ZM3.03167 10.6755L2.92614 10.781L1.39754 14.6025L5.21903 13.0739L5.32456 12.9683C5.13496 12.8973 5.00001 12.7144 5.00001 12.5V12H4.50001C4.22387 12 4.00001 11.7761 4.00001 11.5V11H3.50001C3.28561 11 3.10272 10.865 3.03167 10.6755Z" fill="black"/>
      </svg>`,

      delete:
      `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 1H9.5C9.77614 1 10 1.22386 10 1.5V2.5H6V1.5C6 1.22386 6.22386 1 6.5 1ZM11 2.5V1.5C11 0.671573 10.3284 0 9.5 0H6.5C5.67157 0 5 0.671573 5 1.5V2.5H2.50566C2.50226 2.49997 2.49885 2.49997 2.49544 2.5H1.5C1.22386 2.5 1 2.72386 1 3C1 3.27614 1.22386 3.5 1.5 3.5H2.0384L2.89116 14.1595C2.97431 15.1989 3.84207 16 4.88479 16H11.1152C12.1579 16 13.0257 15.1989 13.1088 14.1595L13.9616 3.5H14.5C14.7761 3.5 15 3.27614 15 3C15 2.72386 14.7761 2.5 14.5 2.5H13.5046C13.5011 2.49997 13.4977 2.49997 13.4943 2.5H11ZM12.9584 3.5L12.112 14.0797C12.0704 14.5994 11.6366 15 11.1152 15H4.88479C4.36343 15 3.92955 14.5994 3.88798 14.0797L3.0416 3.5H12.9584ZM5.47064 4.50086C5.74631 4.48465 5.98292 4.69497 5.99914 4.97064L6.49914 13.4706C6.51535 13.7463 6.30503 13.9829 6.02936 13.9991C5.7537 14.0154 5.51708 13.805 5.50086 13.5294L5.00086 5.02936C4.98465 4.7537 5.19497 4.51708 5.47064 4.50086ZM10.5294 4.50086C10.805 4.51708 11.0154 4.7537 10.9991 5.02936L10.4991 13.5294C10.4829 13.805 10.2463 14.0154 9.97064 13.9991C9.69497 13.9829 9.48465 13.7463 9.50086 13.4706L10.0009 4.97064C10.0171 4.69497 10.2537 4.48465 10.5294 4.50086ZM8 4.5C8.27614 4.5 8.5 4.72386 8.5 5V13.5C8.5 13.7761 8.27614 14 8 14C7.72386 14 7.5 13.7761 7.5 13.5V5C7.5 4.72386 7.72386 4.5 8 4.5Z" fill="black"/>
      </svg>`
  },
]

let todoRowContainer = document.querySelector('.todo__row-container');
let addBtn = document.getElementById("button");
let input = document.getElementById("input");

// doneDoNotIcon.addEventListener("click", changeIcon);

function changeIcon() {
  todoItem.classList.toggle("text-decoration");
  done.classList.toggle("active");
  doNotIcon.classList.toggle("disactive");
}


function createTodoItem() {
  
  const todoItemElement = document.createElement('section');
  todoItemElement.setAttribute('class', 'todo__row-container-row bg-brown');
  todoRowContainer.appendChild(todoItemElement);

  const todoContent = document.createElement('div');
  todoContent.setAttribute('class', 'w-full px-20 py-15');
  todoItemElement.appendChild(todoContent);

  const flexContainer = document.createElement('div');
  flexContainer.setAttribute('class', 'flex justify-between items-center');
  todoContent.appendChild(flexContainer);

  const todoLeft = document.createElement('div');
  todoLeft.setAttribute('class', 'todo__row-container__left items-center flex');
  flexContainer.appendChild(todoLeft);

  const iconsCon = document.createElement('div');
  iconsCon.setAttribute('id', 'done-dont-icons');
  todoLeft.appendChild(iconsCon);

  const iconDoneCon = document.createElement('span');
  iconDoneCon.setAttribute('class', 'done w-30 h-30 border-2 border-gray border-solid rounded-50 justify-center items-center icon');
  iconDoneCon.setAttribute('id', 'done');
  iconsCon.appendChild(iconDoneCon);

  const iconDontCon = document.createElement('span');
  iconDontCon.setAttribute('class', 'do-not w-30 h-30 border-gray border-solid rounded-50 border-2 icon');
  iconDontCon.setAttribute('id', 'do-not');
  iconsCon.appendChild(iconDontCon);


  const text = document.createElement('span');
  text.setAttribute('class', 'ml-15 capitalize font-18 user-select');
  text.setAttribute('id', 'todoItem');
  todoLeft.appendChild(text);

  text.textContent = input.value;


  const todoRight = document.createElement('div');
  todoLeft.setAttribute('class', 'todo__row-container__right flex items-center');
  flexContainer.appendChild(todoRight);

  const iconRename = document.createElement('span');
  iconRename.setAttribute('class', 'rename icon');
  iconRename.innerHTML = data[0].rename;
  todoRight.appendChild(iconRename);

  const iconDelete = document.createElement('span');
  iconDelete.setAttribute('class', 'delete icon ml-10');
  iconDelete.innerHTML = data[0].delete;
  todoRight.appendChild(iconDelete);

  const hr = document.createElement('span');
  hr.setAttribute('class', 'width-90 h-1 bg-blue block m-auto mt-15');
  todoContent.appendChild(hr);

}


function addTask() {
  if (input.value === "") {
    alert("U must write something!");
  } else {
    createTodoItem();
  }
  input.value = "";
}

addBtn.addEventListener("click", addTask);
