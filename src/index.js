// The brain or controller (application entry point) 
// Manages data, decides when to update the display and defines what should happen when a user interacts with the page.

import * as UI from './ui';
import * as ProjectManager from './ProjectManager';
import  Todo  from './Todo';

let activeProjectId = null;

function renderAll() {
    const projects = ProjectManager.getProjects();
    const activeProject = projects.find(project => project.id === activeProjectId);

    UI.renderProjects(projects, activeProjectId);
    
    // If an active project exists, render its todos. Otherwise, display an empty state.
    if (activeProject) {
        UI.renderTodos(activeProject.todos, activeProject.name);
    } else {
        if (projects.length > 0) {
            activeProjectId = projects[0].id;
            renderAll();
        } else {
            UI.renderTodos([], "No Project Found"); 
        }
    }
}

// Define event handlers
function onAddProject(projectName) {
    ProjectManager.addProject(projectName);
    const projects = ProjectManager.getProjects();
    if (projects.length > 0) {
        activeProjectId = projects[projects.length-1].id;
    }
    renderAll();
}

function onSelectProject(projectId) {
    activeProjectId = projectId;
    renderAll();
}

function onAddTodo(todoTitle) {
    if (!activeProjectId) {
        return 'Please select a project first.';   
    }
    const newTodo = new Todo(todoTitle);
    ProjectManager.addTodoToProject(activeProjectId, newTodo);
    renderAll();    
}

function onSaveTodo(todoId, todoData) {
    if (todoId) {
        ProjectManager.updateTodo(activeProjectId, todoId, todoData); 
    } else {
        const newTodo = new Todo(
            todoData.title,
            todoData.description, 
            todoData.dueDate, 
            todoData.priority, 
            todoData.notes, 
            todoData.checklist
        );
        ProjectManager.addTodoToProject(activeProjectId, newTodo);
    }
    UI.hideTodoModal();
    renderAll();
}

function onEditTodo(todoId) {
    const activeProject = ProjectManager.getProjectById(activeProjectId);
    if (activeProject) {
        const todo = activeProject.getTodos().find(t => t.id === todoId); 
        UI.showTodoModal(todo);
    } 
}

function onDeleteTodo(todoId) {
    ProjectManager.deleteTodo(activeProjectId, todoId);
    renderAll();
}

document.addEventListener('DOMContentLoaded', () => {
    // On page load, set the first project as active and render everything
    const projects = ProjectManager.getProjects();

    // If projects exist, make the first one active
    if (projects.length > 0) {
        activeProjectId = projects[0].id;
    }
    renderAll();
    
    UI.setupEventListeners({
        onAddProject,
        onSelectProject,
        onAddTodo,
        onSaveTodo,
        onEditTodo,
        onDeleteTodo,
    });
});

