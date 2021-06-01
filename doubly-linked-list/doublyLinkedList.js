class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.head === null) return undefined;
        let removedNode = this.tail;
        this.tail = removedNode.prev;
        removedNode.prev = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
        } else {
            this.tail.next = null;
        }
        return removedNode;
    }

    shift() {
        if (this.head === null) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let currNode;
        if (idx <= Math.floor((this.length - 1) / 2)) {
            console.log('Traversing the list from start');
            currNode = this.head;
            for (let i = 0; i < idx; i++) {
                currNode = currNode.next;
            }
        } else {
            console.log('Traversing the list from rear');
            currNode = this.tail;
            for (let i = this.length - 1; i > idx; i--) {
                currNode = currNode.prev;
            }
        }
        return currNode;
    }

    set(idx, val) {
        let foundNode = this.get(idx);
        if (!foundNode) {
            return false;
        }
        foundNode.val = val;
        return true;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) {
            return this.unshift(val);
        }
        if (idx === this.length) return this.push(val);
        let newNode = new Node(val);
        let prevNode = this.get(idx - 1);
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        this.length++;
        return this;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        let removeNode = this.get(idx);
        let prevNode = removeNode.prev;
        let afterNode = removeNode.next;
        prevNode.next = afterNode;
        afterNode.prev = prevNode;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}

let list = new DoublyLinkedList();

// list.push(99);
// list.push(100);
// list.push(101);
// console.log(list);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// list.push('I');
// list.push('will');
// list.push('crack');
// list.push('Amazon');
// console.log(list);
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// list.unshift('I');
// list.unshift('will');
// list.unshift('crack');
// list.unshift('Amazon');
// console.log(list);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
list.push(11);
// console.log(list.get(5));
// console.log(list.get(2));
// console.log(list.get(9));
// console.log(list.get(0));
console.log(list.set(5, 19));
console.log(list.get(5));
console.log(list.set(-1, 20));
console.log(list.set(20, 20));

