// Data model
import { parseISO } from 'date-fns';

class Todo {
    constructor(
        title,
        description = '',
        dueDate = null,
        priority = 'medium',
        notes = '',
        checklist = []
    ) {
        this.id = crypto.randomUUID() // Unique ID for each todo
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false; // Default status is not completed
    }

    // Static method to create a Todo instance from a plain object
    static fromPlainObject(obj) {
        const todo = new Todo(
            obj.title,
            obj.description,
            obj.dueDate ? parseISO(obj.dueDate) : null, 
            obj.priority, 
            obj.notes, 
            obj.checklist
        );
        todo.id = obj.id;
        todo.completed = obj.completed;
        return todo;
    }
}

export default Todo;