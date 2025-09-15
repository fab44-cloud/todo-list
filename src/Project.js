// Data model
import Todo from './Todo';

class Project {
    constructor(name) {
        this.name = name;
        this.id = Date.now();
        this.todos = [];
    }
}

export default Project;