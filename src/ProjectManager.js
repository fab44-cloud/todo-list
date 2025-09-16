// Application logic
import { Project } from './Project';

let projects = [];

const createDefaultProject = () => {
    // Check if projects array is empty, and if so, add a default project
    if (projects.length === 0) {
        const defaultProject = new Project('Default Project');
        projects.push(defaultProject);
    }
}