import Project from './Project.js';

const getStoredProjects = () => {
    const projectsJSON = localStorage.getItem('projects');
    if (projectsJSON) {
        try {
            const plainProjects = JSON.parse(projectsJSON);
            if (Array.isArray(plainProjects)) {
                return plainProjects.map(plainProject => Project.fromPlainObject(plainProject));
            }
        } catch (e) {
            console.error("Failed to parse projects from localStorage", e);
        }
    }
    return [];
};

const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
};

export { getStoredProjects, saveProjects};