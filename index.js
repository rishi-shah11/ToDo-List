const taskInput = document.getElementById("task");
const addTask = document.getElementById("add-task-btn");
const deleteAllTasks = document.getElementById("delete-all-btn");
const taskList = document.getElementById("task-list");

addTask.addEventListener("click",newTask);
deleteAllTasks.addEventListener("click", deleteAll);

function newTask () {
  let taskEntered = taskInput.value;
 
  if(taskEntered){
    let myTasks = document.createElement("li");
    myTasks.innerHTML += `
    <hr>
    <p id="task-item">${taskEntered}</p>
    `

    let deleteButton = document.createElement("button");
    deleteButton.id = "delete-btn";
    deleteButton.innerHTML = `<img src="delete-icon.jpg" alt="Image not supported">`
    deleteButton.addEventListener("click", function (){
      let toDoItem = deleteButton.parentNode;
      toDoItem.parentNode.removeChild(toDoItem);
    });

    myTasks.appendChild(deleteButton);
    taskList.appendChild(myTasks);
    taskInput.value = "";
  }
}

function deleteAll (){
  taskList.innerHTML = "";
}

