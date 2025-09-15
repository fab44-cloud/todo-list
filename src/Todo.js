// Data model

class Todo {
    constructor(
        title,
        description = '',
        dueDate = null,
        priority = 'medium',
        notes = '',
        checklist = []
    ) {
        this.id = Date.now() // Unique ID for each todo
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false; // Default status is not completed
    }

    // Method to toggle completion status
    toggleCompleted() {
        this.completed = !this.completed;
    }
}

export default Todo;