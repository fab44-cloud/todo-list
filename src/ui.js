// Presentation layer (DOM manipulation)

import { format, parseISO } from 'date-fns';

const projectListElement = document.getElementById('project-list');
const todoListElement = document.getElementById('todo-list');
const currentProjectTitleElement = document.getElementById('current-project-title');
const addProjectBtn = document.getElementById('add-project-btn');
const newProjectInput = document.getElementById('new-project-input');
const newTodoBtn = document.getElementById('new-todo-btn');

// Modals
const todoModal = document.getElementById('todo-modal');
const todoEditForm = document.getElementById('todo-edit-form');
const todoNotes = todoEditForm.querySelector('#todo-notes');
const todoChecklistContainer = todoEditForm.querySelector('#todo-checklist-container');


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

        if (project.name !== 'Default Project') {
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'x';
            deleteBtn.classList.add('delete-project-btn');
            listItem.appendChild(deleteBtn);
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
        if (todo.isComplete) {
            todoItem.classList.add('completed');
        }

        const formattedDueDate = todo.dueDate ? format(parseISO(todo.dueDate), 'MM/dd/yyyy') : 'No due date';

        todoItem.innerHTML = `
            <details>
                <summary>
                    <div class="todo-summary">
                        <input type="checkbox" class="complete-todo-checkbox" ${todo.isComplete ? 'checked' : ''}>
                        <h3 class="${todo.isComplete ? 'completed-text' : ''}">${todo.title}</h3>
                        <span class="due-date">${formattedDueDate}</span>
                    </div>
                </summary> 
                <div class="todo-details">
                    <p>${todo.description || 'No description'}</p>
                    ${todo.notes ? `<p class="todo-notes">${todo.notes}</p>` : ''}
                    ${todo.checklist && todo.checklist.length ? renderChecklistItems(todo.checklist) : ''}
                </div>
                <div class="todo-actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">&times;</button>
                </div>
            </details>
        `;
        todoListElement.appendChild(todoItem);
    });
}

function renderChecklistItems(checklist) {
    let html = '<ul>';
    checklist.forEach(item => {
        html += `<li><input type="checkbox" disabled ${item.completed ? 'checked' : ''}><span>${item.text}</span></li>`;
    });
    html += '</ul>'
    return html;
}

// Function to populate and show the modal
export function showTodoModal(todo) {
    if(!todoModal) return;

    // Populate the form with todo data
    if (todo) {
        todoEditForm.dataset.todoId = todo.id;
        todoEditForm.querySelector('#todo-title').value = todo.title;
        todoEditForm.querySelector('#todo-description').value = todo.description;
        todoEditForm.querySelector('#todo-duedate').value = todo.dueDate ? format(parseISO(todo.dueDate), 'yyyy-MM-dd') : '';
        todoEditForm.querySelector('#todo-priority').value = todo.priority;
        todoEditForm.querySelector('#todo-notes').value = todo.notes;
        renderChecklist(todo.checklist);
    } else {
        todoEditForm.dataset.todoId = '';
        todoEditForm.reset();
        renderChecklist([]);
    }

    todoModal.classList.remove('hidden');
}

function renderChecklist(checklist) {
    const checklistContainer = document.getElementById('todo-checklist-container');
    checklistContainer.innerHTML = '';
    checklist.forEach(item => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        if (item.completed) {
            checkbox.checked = true;
        }
        const span = document.createElement('span');
        span.textContent = item.text;

        label.appendChild(checkbox);
        label.appendChild(span);
        li.appendChild(label);
        checklistContainer.appendChild(li);
    });
}

export function hideTodoModal() {
    todoModal.classList.add('hidden');
}

export function setupEventListeners({
    onAddProject,
    onSelectProject,
    onEditTodo,
    onDeleteTodo,
    onSaveTodo,
    onDeleteProject,
    onToggleTodoComplete
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
        if (e.target.classList.contains('delete-project-btn')) {
            const li = e.target.closest('li');
            if (li) {
                onDeleteProject(li.dataset.projectId);
            }
        } else {
            const li = e.target.closest('li');
            if (li) {
                onSelectProject(li.dataset.projectId);
            }
        }
    });

    newTodoBtn?.addEventListener('click', () => {
        console.log('add todo!!!');
        showTodoModal();
    });

    todoListElement.addEventListener('click', e => {
        const todoItem = e.target.closest('.todo-item');
        if (!todoItem) return;

        const todoId = todoItem.dataset.todoId;

        if (e.target.classList.contains('delete-btn')) {
            onDeleteTodo(todoId);
        } else if (e.target.classList.contains('edit-btn')) {
            onEditTodo(todoId);
        } else if (e.target.classList.contains('complete-todo-checkbox'))
            onToggleTodoComplete;
    });

    // Handle form submission inside the modal
    todoEditForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = e.target;
        const todoId = form.dataset.todoId;

        const checklistItems = Array.from(document.querySelectorAll('#todo-checklist-container li')).map(li => {
            return {
                text: li.querySelector('span').textContent,
                completed: li.querySelector('input[type="checkbox"]').checked
            };
        });

        const todoData = {
            title: form.querySelector('#todo-title').value,
            description: form.querySelector('#todo-description').value,
            dueDate: form.querySelector('#todo-duedate').value,
            priority: form.querySelector('#todo-priority').value,
            notes: form.querySelector('#todo-notes').value,
            checklist: checklistItems 
        };
        onSaveTodo(todoId, todoData);
    });

    const addChecklistItemBtn = document.getElementById('add-checklist-item-btn');
    addChecklistItemBtn?.addEventListener('click', () => {
        const newItemText = document.getElementById('new-checklist-item').value.trim();
        if (newItemText) {
            const checklistContainer = document.getElementById('todo-checklist-container');
            const li = document.createElement('li');
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const span = document.createElement('span');
            span.textContent = newItemText;

            label.appendChild(checkbox);
            label.appendChild(span);
            li.appendChild(label);
            checklistContainer.appendChild(li);

            document.getElementById('new-checklist-item').value = '';
        }
    });

    // Close modal functionality
    const closeModalBtn = todoModal.querySelector('.close-btn');
    closeModalBtn.addEventListener('click', () => hideTodoModal());

    window.addEventListener('click', e => {
        if (e.target === todoModal) {
            hideTodoModal();
        }
    });
}