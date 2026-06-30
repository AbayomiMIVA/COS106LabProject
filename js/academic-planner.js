// --- INTERACTIVE ACADEMIC PLANNER SCRIPT ---
document.addEventListener("DOMContentLoaded", () => {
    // Array tracking state
    let academicTasks = [
        { id: 101, text: "Book a session with the school office by 11am tomorrow", completed: false },
        { id: 102, text: "COS106 Lab Assessment submission today by 2pm", completed: true },
        { id: 103, text: "Roundup Amazon Cloud Security Certification by September", completed: false }
    ];

    const inputField = document.getElementById("taskInput");
    const addButton = document.getElementById("addTaskBtn");
    const listContainer = document.getElementById("taskContainer");

    // Function demonstrating DOM manipulation and dynamic updates
    function renderTasks() {
        listContainer.innerHTML = ""; // Clear active structure completely

        academicTasks.forEach(task => {
            const rowItem = document.createElement("li");
            rowItem.className = `task-card-row ${task.completed ? 'completed' : ''}`;
            
            rowItem.innerHTML = `
                <span class="task-label">${task.text}</span>
                <div class="task-control-buttons">
                    <button class="btn btn-sm btn-complete-task" data-taskid="${task.id}">
                        ${task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button class="btn btn-sm btn-delete-task" data-taskid="${task.id}">Delete</button>
                </div>
            `;
            listContainer.appendChild(rowItem);
        });
    }

    // Event handling for creating a task
    addButton.addEventListener("click", () => {
        const value = inputField.value.trim();
        if (!value) return;

        academicTasks.push({
            id: Date.now(),
            text: value,
            completed: false
        });

        inputField.value = "";
        renderTasks();
    });

    // Event handling delegation for complete and delete
    listContainer.addEventListener("click", (event) => {
        const idAttribute = event.target.getAttribute("data-taskid");
        if (!idAttribute) return;
        
        const currentId = parseInt(idAttribute);

        if (event.target.classList.contains("btn-complete-task")) {
            // Toggle task completion status
            academicTasks = academicTasks.map(t => t.id === currentId ? { ...t, completed: !t.completed } : t);
        } else if (event.target.classList.contains("btn-delete-task")) {
            // Delete target task element
            academicTasks = academicTasks.filter(t => t.id !== currentId);
        }
        
        renderTasks();
    });

    renderTasks();
});