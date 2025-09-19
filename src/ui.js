// Presentation layer (DOM manipulation)
import { createDefaultProject, getProjects, addProject} from './ProjectManager';
import { Todo } from './Todo'

const projectListElement = document.getElementById('project-list');
const todoListElement = document.getElementById('todo-list');

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
    const currentHeading = document.getElementById('current-project-title');
    currentHeading.textContent = projectName;
    if (todos.length === 0) {
        console.log("No todos yet.");
    }
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.dataset.todoId = todo.id;
        todoItem.classList.add('todo-item', `priority-${todo.prority}`);
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
