const getStoredProjects = () => {
    const projectsJSON = localStorage.getItem('projects');
    if (projectsJSON) {
        try {
            const parsedProjects = JSON.parse(projectsJSON);
            if (Array.isArray(parsedProjects)) {
                return parsedProjects;
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