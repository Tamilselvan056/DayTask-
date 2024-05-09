function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = '<span class="bold">' + taskInput.value + '</span>' +
        '<button class="edit-btn" onclick="editTask(this)">&#9998;</button>' +
        '<button class="delete-btn" onclick="deleteTask(this)">&#10006;</button>' +
        '<input type="time" class="task-time">';
    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteTask(element) {
    var taskList = document.getElementById("taskList");
    var li = element.parentElement;
    taskList.removeChild(li);
}

function editTask(element) {
    var li = element.parentElement;
    var span = li.querySelector('.bold');
    var newTask = prompt("Edit task:", span.innerText);

    if (newTask !== null) {
        span.innerText = newTask;
    }
}

