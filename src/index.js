// The brain or controller (application entry point) 
// Manages data, decides when to update the display and defines what should happen when a user interacts with the page.

import * as UI from './ui.js';
import * as ProjectManager from './ProjectManager.js';
import  Todo  from './Todo.js';
import { parseISO } from 'date-fns';

let activeProjectId = null;

function renderAll() {
    const projects = ProjectManager.getProjects();

    // Ensure there is always a valid active project ID.
    if (projects.length > 0) {
        if (!activeProjectId || !projects.find(p => p.id === activeProjectId)) {
            activeProjectId = projects[0].id;
        }
    } else {
        activeProjectId = null;
    }
    
    const activeProject = activeProjectId ? ProjectManager.getProjectById(activeProjectId) : null;
    
    UI.renderProjects(projects, activeProjectId);
    
    if (activeProject) {
        UI.renderTodos(activeProject.todos, activeProject.name);
    } else {
        UI.renderTodos([], "No Project Found"); 
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

function onSaveTodo(todoId, todoData) {
    if (todoId) {
        ProjectManager.updateTodo(activeProjectId, todoId, todoData); 
    } else {
        const newTodo = new Todo(
            todoData.title,
            todoData.description, 
            todoData.dueDate ? parseISO(todoData.dueDate) : null, 
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
        const todo = activeProject.findTodos(todoId);
        UI.showTodoModal(todo);
    } 
}

function onDeleteTodo(todoId) {
    ProjectManager.deleteTodo(activeProjectId, todoId);
    renderAll();
}

function onDeleteProject(projectId) {
    ProjectManager.removeProject(projectId);
    renderAll();
}

function onToggleTodoComplete(todoId) {
    const project = ProjectManager.getProjectById(activeProjectId);
    if (project) {
        const todo = project.findTodos(todoId);
        if (todo) {
            todo.isComplete = !todo.isComplete;
            renderAll();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Check for existing projects in localStorage on page load
    let projects = ProjectManager.getProjects();

    // Add default project if none exist
    if (projects.length === 0) {
        ProjectManager.addProject('Default Project');
        projects = ProjectManager.getProjects();
    }

    // Set the active project ID after projects are loaded or created
    activeProjectId = projects[0].id;
    
    renderAll();
    
    UI.setupEventListeners({
        onAddProject,
        onSelectProject,
        onSaveTodo,
        onEditTodo,
        onDeleteTodo,
        onDeleteProject,
        onToggleTodoComplete
    });
});

