// Presentation layer (DOM manipulation)

const projectListElement = document.getElementById('project-list');
const todoListElement = document.getElementById('todo-list');
const currentProjectTitleElement = document.getElementById('current-project-title');
const addTodoBtn = document.getElementById('add-todo-btn');
const newTodoInput = document.getElementById('new-todo-input');
const addProjectBtn = document.getElementById('add-project-btn');
const newProjectInput = document.getElementById('new-project-input');

// Modals
const todoModal = document.getElementById('todo-modal');
const todoEditForm = document.getElementById('todo-edit-form');


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

export function setupEventListeners({
    onAddProject,
    onAddTodo,
    onSelectProject,
    onEditTodo,
    onDeleteTodo,
    onSaveTodo
}) {
    // Add Project button listener
    addProjectBtn.addEventListener('click', () => {
        const name = newProjectInput.value.trim();
        if (name) {
            onAddProject(name);
            newProjectInput.value = '';
        }
    });

    // Select Project listener (event delegation on parent <ul>)
    projectListElement.addEventListener('click', e => {
        const li = e.target.closest('li');
        if (li) {
            onSelectProject(li.dataset.projectId);
        }
    });

    addTodoBtn.addEventListener('click', () => {
        const title = newTodoInput.value.trim();
        if (title) {
            onAddTodo(title);
            newTodoInput.value = '';
        }
    });

    todoListElement.addEventListener('click', e => {
        const todoItem = e.target.closest('.todo-item');
        if (!todoItem) return;

        const todoId = todoItem.dataset.todoId;

        if (e.target.classList.contains('delete-btn')) {
            onDeleteTodo(todoId);
        } else if (e.target.closest('todo-info')) {
            onEditTodo(todoId);
        }
    });

    // Handle form submission inside the modal
    todoEditForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = e.target;
        const todoData = {
            id: form.dataset.todoId,
            title: form.querySelector('#todo-title').value,
            description: form.querySelector('#todo-description').value,
            dueDate: form.querySelector('#todo-duedate').value,
            priority: form.querySelector('#todo-priority').value, 
        };
        onSaveTodo(todoData);
    });

    // Close modal functionality
    const closeModalBtn = todoModal.querySelector('.close-btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => hideTodoModal());
    }

    window.addEventListener('click', e => {
        if (e.target === todoModal) {
            hideTodoModal();
        }
    });
}