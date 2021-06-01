class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.nodeList = [];
        this.length = 0;
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.nodeList.push(newNode);
        this.length++;

        // Check if there are more than one element in priority queue.
        if (this.length > 1) {
            // Bubble up
            this.bubbleUp();
        }
    }

    dequeue() {
        let element = this.nodeList[0];
        if (this.length > 1) {
            this.swap(this.nodeList, 0, this.length - 1);
            this.sinkDown();
        }
        this.length--;
        return element;
    }

    sinkDown() {
        let idx = 0;
        let element = this.nodeList[idx];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < this.length - 1) {
                leftChild = this.nodeList[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < this.length - 1) {
                rightChild = this.nodeList[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.swap(this.nodeList, idx, swap);
            idx = swap;
        }

    }

    bubbleUp() {
        let targetElement = this.nodeList[this.length - 1];
        let targetIdx = this.length - 1;
        while (true) {
            let parentIdx = Math.floor((targetIdx - 1) / 2);
            if (parentIdx < 0) break;
            let parentElement = this.nodeList[parentIdx];
            if (targetElement.priority < parentElement.priority) {
                this.swap(this.nodeList, targetIdx, parentIdx);
                targetIdx = parentIdx;
            } else {
                break;
            }
        }
    }

    swap(nodeList, targetIdx, parentIdx) {
        let temp = nodeList[parentIdx];
        nodeList[parentIdx] = nodeList[targetIdx];
        nodeList[targetIdx] = temp;
        return nodeList;
    }

    display() {
        console.log(this.nodeList);
    }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
ER.display();

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());