import Node from "./Node.js";

class ToDoList {
    constructor() {
        this.head = null;
    }

    addTask(task) {
        const newTask = new Node(task);
        newTask.setNextNode(this.head);
        this.head = newTask;
    }

    removeTask() {
        if (!this.head) {
            console.log('No Task to remove');
            return;
        }
        console.log(`Completed: ${this.head.task}`);
        this.head = this.head.getNextNode();
    }

    getTask() {
        let current = this.head;
        const tasks = [];
        while (current) {
            tasks.push(current.task);
            current = current.getNextNode();
        }
        return tasks;
    }
}

export default ToDoList;