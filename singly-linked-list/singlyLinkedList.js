class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.head === null) {
            return "List is empty";
        }
        if (this.head === this.tail) {
            let result = this.head.val;
            this.head = null;
            this.tail = null;
            this.length--;
            return result;
        }
        let currNode = this.head;
        let prevNode;
        while (currNode.next !== null) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        this.tail = prevNode;
        prevNode.next = null;
        this.length--;
        return currNode.val;
    }

    shift() {
        if (this.head === null) {
            return 'List is empty';
        }
        let currHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return currHead.val;
        }
        this.head = currHead.next;
        currHead.next = null;
        this.length--;
        return currHead.val;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        let tempNode = this.head;
        for (let i = 0; i < idx; i++) {
            tempNode = tempNode.next;
        }
        return tempNode;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (!node) {
            return false;
        }
        node.val = val;
        return true;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) {
            return false;
        }
        if (idx === this.length) {
            return this.push(val);
        }
        if (idx === 0) {
            return this.unshift(val);
        }
        let newNode = new Node(val);
        let prevNode = this.get(idx - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return this;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        let prevNode = this.get(idx - 1);
        let remNode = prevNode.next;
        prevNode.next = remNode.next;
        remNode.next = null;
        this.length--;
        return remNode.val;
    }

    reverse() {
        let prevNode;
        let tempNode = this.head;
        let nextNode = tempNode.next;
        this.head = this.tail;
        this.tail = tempNode;
        this.tail.next = null;
        while (nextNode !== null) {
            prevNode = tempNode;
            tempNode = nextNode;
            nextNode = nextNode.next;
            tempNode.next = prevNode;
        }
        this.head = tempNode;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// console.log(list.get(1));
// console.log(list.get(-1));
// console.log(list.get(5));
// console.log(list.get(3));
// console.log(list.set(1, 10));
// list.traverse();
// list.insert(3, 5);
console.log("List before reversing");
list.traverse();
// console.log(list.remove(2));
// list.traverse();
// list.traverse();
// console.log()
list.reverse();
console.log("List after reversing");
list.traverse();

