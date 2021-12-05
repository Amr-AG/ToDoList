let container = document.querySelector(".container");
let addTask = document.getElementById("add");
let submitClick = document.querySelector("i");
let spaceTasks = document.querySelector(".spaceTasks");

submitClick.addEventListener("click", (e) => {
  // this if for don't craet task Empty
  if (addTask.value === "") {
    e.preventDefault();
  } else {
    //craet Tasks after submit clicked
    let tasks = document.createElement("div");
    tasks.className = "tasks";
    //creat content
    let content = document.createElement("span");
    content.className = "content";
    content.innerHTML = addTask.value;
    //creat buttons Delete and Done
    let buttons = document.createElement("div");
    buttons.className = "buttons";
    //delete button Creat
    let DeleteTask = document.createElement("span");
    DeleteTask.className = "fas fa-minus-circle delete";
    //delete click
    DeleteTask.onclick = () => {
      tasks.style.display = "none";
      document.getElementById("del").play();
    };

    //Done button Creat
    let DoneTask = document.createElement("i");
    DoneTask.className = "fas fa-check-circle done";

    //Done click
    DoneTask.onclick = () => {
      tasks.style.backgroundColor = "#4b8778";
      tasks.style.transition = "2s";
      DoneTask.style.color = "black";
      DoneTask.style.transition = "2s";
      document.getElementById("done").play();
    };

    buttons.appendChild(DoneTask);
    buttons.appendChild(DeleteTask);
    tasks.appendChild(content);
    tasks.appendChild(buttons);
    spaceTasks.appendChild(tasks);

    //Clear task fromasd text after submit
    addTask.value = "";
  }
});
