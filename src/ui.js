// Presentation layer (DOM manipulation)
import { createDefaultProject, getProjects, addProject} from './ProjectManager';
import { Todo } from './Todo'

const projectListElement = document.getElementById('project-list');

// View all projects
export function renderProjects(projects){
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