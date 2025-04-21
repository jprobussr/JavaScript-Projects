class Node {
    constructor(task) {
        this.task = task;
        this.next = null;
    }

    setNextNode(node) {
        this.next = node;
    }

    getNextNode() {
        return this.next;
    }
}

export default Node;
