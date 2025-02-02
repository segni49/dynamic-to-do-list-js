// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and Trim the Value from the Task Input Field
        const taskText = taskInput.value.trim();

        // Check if taskText is Not Empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Task Creation and Removal
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the Task Input Field
        taskInput.value = "";
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
