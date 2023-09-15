const taskElement = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskListElement = document.getElementById('task-list');

function addTask () {
    
    const taskValue = taskElement.value;
    taskListElement.innerHTML += `</li>
    <li>
        <p>${taskValue}</p>
        <div>
            <button class="done">Done</button>
            <button class ="delete">Delete</button>
        </div>

    </li>`;
    taskElement.value = "";


};

addTaskButton.addEventListener('click', addTask);


function deleteOrCompleteTask(event) {
    const target = event.target;
    const taskItem = target.closest('li');
  
    if (target.classList.contains("done")) {
      taskItem.classList.toggle("completed");
      target.textContent = "Undo";
    } else if (target.classList.contains("delete")) {
      taskItem.remove();
    }
  };
  
  taskListElement.addEventListener('click', deleteOrCompleteTask);


  