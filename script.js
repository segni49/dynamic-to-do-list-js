// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to Load Tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
                saveTasks();
            };

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
        });
    }

    // Function to Save Tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(listItem => {
            tasks.push(listItem.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

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
            saveTasks();
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the Task Input Field
        taskInput.value = "";

        // Save Tasks to Local Storage
        saveTasks();
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load Tasks from Local Storage on Page Load
    loadTasks();
});

