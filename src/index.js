// The brain or controller (application entry point) 
// Manages data, decides when to update the display and defines what should happen when a user interacts with the page.

import * as UI from './ui';
import * as ProjectManager from './ProjectManager';

let activeProjectId = null;

function renderAll() {
    const projects = ProjectManager.getProjects();
    const activeProject = projects.find(project => project.id === activeProjectId);
    UI.renderProjects(projects, activeProjectId);
    
    // If an active project exists, render its todos. Otherwise, display an empty state.
    if (activeProject) {
        UI.renderTodos(activeProject.todos, activeProject.name);
    } else {
        UI.renderTodos([], "No Project Selected");
    }
}

// Define event handlers
function onAddProject(projectName) {
    ProjectManager.addProject(projectName);
    const newProjects = ProjectManager.getProjects();
    if (newProjects.length > 0) {
        activeProjectId = newProjects[newProjects.length-1].id;
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
    ProjectManager.addTodoToProject(activeProjectId, todoTitle);
    renderAll();    
}

function onSaveTodo(todoData) {
    ProjectManager.updateTodo(activeProjectId, todoData);
    UI.hideTodoModal();
    renderAll();
}

function onEditTodo(todoId) {
    const todo = ProjectManager.getTodo(activeProjectId, todoId);
    UI.showTodoModal(todo);
}

function onDeleteTodo(todoId) {
    ProjectManager.deleteTodo(activeProjectId, todoId);
    renderAll();
}

document.addEventListener('DOMContentLoaded', () => {
    // On page load, set the first project as active and render everything
    let initialProjects = ProjectManager.getProjects();

    if (initialProjects.length === 0) {
        // Create a default project if none exist
        ProjectManager.addProject('Default Project');
        initialProjects = ProjectManager.getProjects();
    }

        activeProjectId = initialProjects[0].id;
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

