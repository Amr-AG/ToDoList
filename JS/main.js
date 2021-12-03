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
      "width:445px; min-height:290px; border-radius:8px; padding:25px 15px; border-bottom:solid 2px #5a5a5a; display: flex;flex-wrap: wrap; background-color:#2e2e2e; color:white; justify-content:space-between;align-items:start; margin: 25px 15px;";
    //creat content
    let content = document.createElement("span");
    content.className = "content"
    content.innerHTML = addTask.value;
    content.style.cssText =
      "width:210px; font-size:25px; height: 100%; display: flex;align-items: start; padding:0 10px;";
    //creat buttons Delete and Done
    let buttons = document.createElement("div");
    buttons.className = "buttons";
    buttons.style.cssText =
      "width:80px; display:flex; justify-content:space-between;flex-wrap: wrap;align-items:center;";
    //delete button Creat
    let DeleteTask = document.createElement("span");
    DeleteTask.className = "fas fa-minus-circle";
    DeleteTask.style.cssText = "color:#cc6363; font-size:28px;margin:auto; margin-right:5px;";
    //delete click
    DeleteTask.onclick = () => {
      tasks.style.display = "none";
      document.getElementById("del").play();
    };

    //Done button Creat
    let DoneTask = document.createElement("i");
    DoneTask.className = "fas fa-check-circle";
    DoneTask.style.cssText = "color:#4b8778; font-size:28px; margin:auto; margin-right:10px;";

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
