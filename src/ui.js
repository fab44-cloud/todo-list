// Presentation layer (DOM manipulation)

const projectListElement = document.getElementById('project-list');
const todoListElement = document.getElementById('todo-list');
const currentProjectTitleElement = document.getElementById('current-project-title');

// View all projects
export function renderProjects(projects, activeProjectId){
    projectListElement.innerHTML = "";
    
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project.name;
        listItem.dataset.projectId = project.id;

        if (project.id === activeProjectId){
            listItem.classList.add('active');
        }
        
        projectListElement.appendChild(listItem);
    });
}

export function renderTodos(todos, projectName) {
    todoListElement.innerHTML = "";
    currentProjectTitleElement.textContent = projectName;
    
    if (todos.length === 0) {
        const noTodosMessage = document.createElement('p');
        noTodosMessage.textContent = "No todos yet. Add one!"
        todoListElement.appendChild(noTodosMessage);
        return;
    }

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.dataset.todoId = todo.id;
        todoItem.classList.add('todo-item', `priority-${todo.priority}`);
        todoItem.innerHTML =
        `<div class="todo-info">
            <h3>${todo.title}</h3>
            <span class="due-date">${todo.dueDate || 'No due date'}</span>
        </div>
        <div class="todo-actions">
            <button class="delete-btn">&times;</button>
        </div>`;
        todoListElement.appendChild(todoItem);
    });
}
