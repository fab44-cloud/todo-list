// Controller (application entry point)

import * as UI from './ui';
import * as ProjectManager from './ProjectManager';

let activeProjectId = null;

function renderAll() {
    const projects = ProjectManager.getProjects();
    UI.renderProjects(projects, activeProjectId);
}

document.addEventListener('DOMContentLoaded', () => {
    // On page load, set the first project as active and render everything
    const initialProject = ProjectManager.getProjects();
    if (initialProject.length > 0) {
        activeProjectId = initialProject[0].id
    }
    renderAll();
});