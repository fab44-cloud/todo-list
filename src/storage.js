const getStoredProjects = () => {
    const projectsJSON = localStorage.getItem('projects');
    if (projectsJSON) {
        return JSON.parse(projectsJSON);
    }
    return [];
};

const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
};

export { getStoredProjects, saveProjects};