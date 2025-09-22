// Data model
import Todo from './Todo';

class Project {
    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.todos = [];
    }

    addTodo(todo) {
        if (todo instanceof Todo) {
            this.todos.push(todo);
        } else {
            console.error('Invalid item. Must be an instance of Todo.')
        }
    }

    // Update a todo item by its ID with new data
    updateTodo(todoId, updatedTodoData) {
        const todoToUpdate = this.todos.find(todo => todo.id === todoId);
        if (todoToUpdate) {
            Object.assign(todoToUpdate, updatedTodoData);
        } else {
            console.error(`Todo with ID ${todoId} not found in project ${this.id}`);
        }
    }

    // Remove a todo item by its ID
    removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId)   
    }

    // Get all todo items in this project
    getTodos() {
        return [...this.todos];
    }

    // Find a specific todo item by its ID
    findTodos(todoId) {
        return this.todos.find(todo => todo.id === todoId);
    }
}

export default Project;