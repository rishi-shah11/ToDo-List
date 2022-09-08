const taskEntered = document.getElementById("task");
const addTask = document.getElementById("add-task-btn");
const deleteTask = document.getElementById("delete-btn");
const deleteAllTasks = document.getElementById("delete-all-btn");
const taskList = document.getElementById("task-list");

addTask.addEventListener("click",newTask);
deleteAllTasks.addEventListener("click", deleteAll);

function newTask () {
  if(taskEntered.value){
    taskList.innerHTML += `
    <hr>
    <li>
      <p id="task-item">${taskEntered.value}</p>
      <button id="delete-btn"><img src="delete-icon.jpg" alt="Image not supported"></button>
    </li>
    `
    taskEntered.value = "";
  }
}

function deleteAll (){
  taskList.innerHTML = "";
}

