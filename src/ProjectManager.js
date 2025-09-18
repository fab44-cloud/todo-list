// Application logic
import { Project } from './Project';

let projects = [];

const createDefaultProject = () => {
    // Check if projects array is empty, and if so, add a default project
    if (projects.length === 0) {
        const defaultProject = new Project('Default Project');
        projects.push(defaultProject);
    }
};

// Function to get all projects
const getProjects = () => {
    return [...projects];
};

// Function to find a project by its unique ID
const getProjectById = (projectId) => {
    return projects.find(project => project.id === projectId)
};

// Function to add a new project
const addProject = (name) => {
    if (!name) return;
    const newProject = new Project(name);
    projects.push(newProject);
};

// Function to remove a project (preventing removal of the default project)
const removeProject = (projectId) => {
    const projectToRemove = projects.find(project => project.id === projectId);
    if (projectToRemove && projectToRemove.name !== 'Default Project') {
        projects = projects.filter(project => projectId !== project.id);
    } else {
        console.error('Cannot remove the default project.');
    }
};

// Function to add a todo to a specific project
const addTodoToProject = (projectId, todo) => {
    const project = getProjectById(projectId);
    if (project) {
        project.addTodo(todo)
    } else {
        console.error('Project not found');
    }
};

// Function to move a todo from one project to another
const moveTodo = (todoId, fromProjectId, toProjectId) => {
    const fromProject = getProjectById(fromProjectId);
    const toProject = getProjectById(toProjectId);
    if (fromProject && toProject) {
        const todoToMove = fromProject.getTodos().find(todo => todo.id === todoId);
        if (todoToMove) {
            fromProject.removeTodo(todoId);
            toProject.addTodo(todoToMove);
            return true;
        }
    }
    return false;
};

createDefaultProject();

export {
    getProjects,
    getProjectById,
    addProject,
    removeProject,
    addTodoToProject,
    moveTodo
};