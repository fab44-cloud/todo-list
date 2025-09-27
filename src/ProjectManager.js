// Application logic
import Project from './Project.js';
import { getStoredProjects, saveProjects } from './storage.js';

let projects = getStoredProjects();
if (!Array.isArray(projects)) {
    projects = [];
}

const _saveState = () => {
    saveProjects(projects);
}

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
    _saveState();
};

// Function to remove a project (preventing removal of the default project)
const removeProject = (projectId) => {
    const projectToRemove = getProjectById(projectId);
    if (projectToRemove && projectToRemove.name !== 'Default Project') {
        projects = projects.filter(project => project.id !== projectId);
        _saveState();
    } else {
        console.error('Cannot remove the default project.');
    }
};

// Function to add a todo to a specific project
const addTodoToProject = (projectId, todo) => {
    const project = getProjectById(projectId);
    if (project) {
        project.addTodo(todo);
        _saveState();
    }
};

const updateTodo = (projectId, todoId, todoData) => {
    const project = getProjectById(projectId);
    if (project) {
        project.updateTodo(todoId, todoData); 
        _saveState();
    }
};
   

const deleteTodo = (projectId, todoId) => {
    const project = getProjectById(projectId);
    if (project) {
        project.removeTodo(todoId);
        _saveState();
    }
};

// Function to move a todo from one project to another
const moveTodo = (todoId, fromProjectId, toProjectId) => {
    const fromProject = getProjectById(fromProjectId);
    const toProject = getProjectById(toProjectId);
    if (fromProject && toProject) {
        const todoToMove = fromProject.findTodos(todoId);
        if (todoToMove) {
            fromProject.removeTodo(todoId);
            toProject.addTodo(todoToMove);
            _saveState();
            return true;
        }
    }
    return false;
};

export {
    getProjects,
    getProjectById,
    addProject,
    removeProject,
    addTodoToProject,
    updateTodo,
    deleteTodo,
    moveTodo
};