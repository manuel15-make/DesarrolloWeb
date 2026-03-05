
const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('count');


let taskCounter = 0;


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, escribe una tarea.');
        return;
    }

    
    const li = document.createElement('li');
    li.textContent = taskText;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    
    li.appendChild(deleteButton);

    
    taskList.appendChild(li);

 
    taskInput.value = '';
    updateTaskCount();
}


function deleteTask(taskElement) {
    taskList.removeChild(taskElement);
    updateTaskCount();
}


function updateTaskCount() {
    taskCounter = taskList.children.length;
    taskCount.textContent = taskCounter;
}


addTaskButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});