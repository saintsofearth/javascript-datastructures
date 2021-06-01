// Stack Singly Linked List implementation

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Push follow the logic of unshift
    push(val) {
        let newNode = new Node(val);
        if (!this.last) {
            this.last = newNode;
            this.first = newNode;
        } else {
            newNode.next = this.last;
            this.last = newNode;
        }
        return ++this.size;
    }

    // Pop follow the logic of shift
    pop() {
        if (!this.last) {
            return null;
        }
        let removeNode = this.last;
        if (this.last === this.first) {
            this.last = null;
            this.first = null;
        } else {
            this.last = removeNode.next;
            removeNode.next = null;
        }
        this.size--;
        return removeNode;
    }
}



let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


