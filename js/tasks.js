let currentUser = localStorage.getItem('currentUser');
let users = JSON.parse(localStorage.getItem('users')) || {};

if (!currentUser) {
    window.location.href = 'login.html';
}

function loadTasks() {
    let taskData = getDailyTasks();
    let list = document.getElementById('taskList');
    list.innerHTML = '';
    
    taskData.tasks.forEach(task => {
        let div = document.createElement('div');
        div.className = 'task-card';
        div.id = 'task-' + task.id;
        
        let isCompleted = taskData.completed.includes(task.id);
        let btnText = isCompleted ? '✓ Completed' : 'Complete';
        let btnClass = isCompleted ? 'btn-completed' : '';
        
        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p class="task-points"><strong>+${task.points} Points</strong></p>
            <button class="${btnClass}" onclick="completeTask(${task.id})" ${isCompleted ? 'disabled' : ''}>${btnText}</button>
        `;
        
        if (isCompleted) {
            div.style.opacity = '0.6';
        }
        
        list.appendChild(div);
    });
    
    // Show next refresh time
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let refreshTime = tomorrow.toLocaleTimeString();
    document.getElementById('taskRefresh').innerText = `New tasks refresh at ${refreshTime}`;
}

function completeTask(taskId) {
    let taskData = getDailyTasks();
    
    if (!taskData.completed.includes(taskId)) {
        // Find the task to get points
        let task = taskData.tasks.find(t => t.id === taskId);
        if (task) {
            taskData.completed.push(taskId);
            localStorage.setItem('taskData', JSON.stringify(taskData));
            
            // Add points to user
            addPoints(task.points);
            
            // Update UI
            let taskDiv = document.getElementById('task-' + taskId);
            let btn = taskDiv.querySelector('button');
            btn.innerText = '✓ Completed';
            btn.classList.add('btn-completed');
            btn.disabled = true;
            taskDiv.style.opacity = '0.6';
            
            alert(`Task completed! +${task.points} points`);
        }
    }
}

loadTasks();