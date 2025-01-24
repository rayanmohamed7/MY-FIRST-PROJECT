// script.js

// Add event listener to the form to handle task addition
document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        addTask(taskValue);
        taskInput.value = ''; // Clear input field
    }
});

// Function to add a task
function addTask(task) {
    const tasksList = document.getElementById('tasks');
    const taskItem = document.createElement('li');

    // Create a span for the task text
    const taskText = document.createElement('span');
    taskText.textContent = task;
    
    // Button to delete task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => taskItem.remove());
    
    // Add click event to toggle completion with a checkmark
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        if (taskItem.classList.contains('completed')) {
            taskText.textContent = `✓ ${task}`;  // Add checkmark
        } else {
            taskText.textContent = task;  // Remove checkmark
        }
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    tasksList.appendChild(taskItem);
}
