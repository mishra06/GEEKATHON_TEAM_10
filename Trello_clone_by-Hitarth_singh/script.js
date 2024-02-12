

let formToSubmit = document.querySelector("#todoForm");
let formInput= document.querySelector("#addTodo");
let todoDiv = document.querySelector("#Todo");
let userInputTask = document.querySelectorAll(".userInput");
let allTaskCont = document.querySelectorAll(".smlcont");

formToSubmit.addEventListener("submit", e => {
  // console.log("working");
    e.preventDefault();
    let input = formInput.value;
    if (!input) return;
    let task = document.createElement("div");
    task.classList.add("userInput");
    task.setAttribute("draggable", "true");
    task.innerHTML = `
      <p class="task" contenteditable="true"> ${input} </p>
      <i class="material-icons" style="font-size:18px;">delete</i>
  `;
  
    todoDiv.appendChild(task);
    console.log(task);
  
    formInput.value = "";
  
    task.querySelector("i").addEventListener("click", () => {
      task.remove();
    });
  
    task.addEventListener("dragstart", () => {
      task.classList.add("dragging");
    });
    task.addEventListener("dragend", () => {
      task.classList.remove("dragging");
    });
    
  });
  


userInputTask.forEach(task => {
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
});

allTaskCont.forEach(container => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    let insertingtask = AddTask(container, e.clientY);
    let curTask = document.querySelector(".dragging");

    if (!insertingtask) {
      container.appendChild(curTask);
    } else {
      container.insertBefore(curTask, insertingtask);
    }
  });
});

let AddTask = (container, mouseY) => {
  let alltask = container.querySelectorAll(".userInput:not(.dragging)");
  let closesttask = null;
  let closestoffset = Number.NEGATIVE_INFINITY;
  alltask.forEach(task => {
    let { top } = task.getBoundingClientRect();
    let offset = mouseY - top;

    if (offset < 0 && offset > closestoffset) {
      closestoffset = offset;
      closesttask = task;
    }
  });
  return closesttask;
};


document.querySelectorAll(".btn_add").forEach(button => {
  button.addEventListener("click", () => {
    let task = document.createElement("div");
    let parentContainer = button.parentNode;

    task.classList.add("userInput");
  task.setAttribute("draggable", "true");
  task.innerHTML = `
  <p class="task" contenteditable="true"  spellcheck="false""></p>
    <i class="material-icons" style="font-size:18px;">delete</i>
`;

  parentContainer.appendChild(task);

  let inputBox = task.querySelector(".task");
    inputBox.focus();


  task.querySelector("i").addEventListener("click", () => {
    task.remove();
  });

   
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");

  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });

});
});



