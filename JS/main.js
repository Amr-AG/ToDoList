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
    tasks.style.cssText =
      "min-width:100%; border-radius:5px;min-height: 70px; padding:25px 15px; border-bottom:solid 2px #5a5a5a; display: flex;flex-wrap: no-wrap; background-color:#2e2e2e; color:white; justify-content:space-between;align-items:center;";
    //creat content
    let content = document.createElement("span");
    content.innerHTML = addTask.value;
    content.style.cssText =
      " font-size:25px; height: 100%; display: flex;align-items: center; padding:0 10px;";
    //creat buttons Delete and Done
    let buttons = document.createElement("div");
    buttons.style.cssText =
      " display:flex; justify-content:space-between; align-items:center;";
    //delete button Creat
    let DeleteTask = document.createElement("span");
    DeleteTask.style.cssText =
      "padding:5px; margin-right:15px;margin-left:10px;width:80px; height:30px; color:white; background-color:#ff6969de; cursor:pointer; text-align:center; z-index:5; border-radius:5px;";
    DeleteTask.innerHTML = "Delete";

    //delete click
    DeleteTask.onclick = () => {
      tasks.style.display = "none";
      document.getElementById("del").play();
    };

    //Done button Creat
    let DoneTask = document.createElement("span");
    DoneTask.style.cssText =
      "margin-left:20px; 10px;padding:5px; width:80px; height:30px; color:white; background-color:#4b8778; cursor:pointer; text-align:center; z-index:5; border-radius:5px;";
    DoneTask.innerHTML = "Done";

    //Done click
    DoneTask.onclick = () => {
      tasks.style.backgroundColor = "#4b8778";
      tasks.style.transition = "2s";
      DoneTask.style.backgroundColor = "#2e2e2e";
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
