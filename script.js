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
  const paragraph = taskItem.firstElementChild;

  if (target.classList.contains("done")) {
      paragraph.classList.add("completed");
      target.textContent = "Undo";
      target.classList.remove("done");
      target.classList.add("undo");
  } else if (target.classList.contains("undo")) {
      paragraph.classList.remove("completed");
      target.textContent = "Done";
      target.classList.remove("undo");
      target.classList.add("done");
  } else if (target.classList.contains("delete")) {
      taskItem.remove();
  }
}

taskListElement.addEventListener('click', deleteOrCompleteTask);



  