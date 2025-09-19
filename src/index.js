// Controller (application entry point)

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

document.addEventListener('DOMContentLoaded', () => {
    // On page load, set the first project as active and render everything
    const initialProjects = ProjectManager.getProjects();
    if (initialProjects.length > 0) {
        activeProjectId = initialProjects[0].id
    }
    renderAll();
});

