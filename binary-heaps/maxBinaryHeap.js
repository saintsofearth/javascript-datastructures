class MaxBinaryHeap {
    constructor() {
        this.val = [55, 39, 41, 18, 27, 12, 33];
    }

    insert(val) {
        // Step 1: Push the values into the values property on the heap
        this.val.push(val);

        // Step 2: Bubble up
        let currNodeIndex = this.val.length - 1;

        // A check to see if the value to be inserted is the first value of the Heap or not
        if (currNodeIndex !== 0) {
            let parentNodeIndex = Math.floor((currNodeIndex - 1) / 2);
            while (this.val[currNodeIndex] > this.val[parentNodeIndex] && currNodeIndex > 0) {
                // swap parent node value with child node value
                let temp = this.val[currNodeIndex];
                this.val[currNodeIndex] = this.val[parentNodeIndex];
                this.val[parentNodeIndex] = temp;
                // Update the indexes
                currNodeIndex = parentNodeIndex;
                parentNodeIndex = Math.floor((currNodeIndex - 1) / 2);
            }
        }
    }

    extractMax() {
        // Swap the root value with the last value
        let heapLength = this.val.length;
        let maxVal = -1;
        if (heapLength > 0) {
            this.swap(this.val, 0, heapLength - 1);
            maxVal = this.val.pop();
            // Heapify-down
            this.heapify();
        }
        return maxVal;
    }

    heapify() {
        let newRootVal = this.val[0];
        let idx = 0;
        while (true) {
            let leftChildVal = -1;
            let rightChildVal = -1;
            if (2 * idx + 1 <= this.val.length - 1) {
                leftChildVal = this.val[2 * idx + 1];
            }
            if (2 * idx + 2 <= this.val.length - 1) {
                rightChildVal = this.val[2 * idx + 2];
            }
            if (newRootVal < leftChildVal && newRootVal < rightChildVal) {
                if (leftChildVal > rightChildVal) {
                    this.swap(this.val, idx, 2 * idx + 1);
                    idx = 2 * idx + 1;
                } else {
                    this.swap(this.val, idx, 2 * idx + 2);
                    idx = 2 * idx + 2;
                }
            } else if (newRootVal < leftChildVal) {
                this.swap(this.val, idx, 2 * idx + 1);
                idx = 2 * idx + 1;
            } else if (newRootVal < rightChildVal) {
                this.swap(this.val, idx, 2 * idx + 2);
                idx = 2 * idx + 2;
            } else {
                break;
            }
        }
    }

    swap(values, parentIdx, childIdx) {
        let temp = values[parentIdx];
        values[parentIdx] = values[childIdx];
        values[childIdx] = temp;
        return values;
    }

    displayHeap() {
        if (this.val.length === 0) {
            console.log('Max heap is empty');
        } else {
            console.log(this.val);
        }
    }
}

let binaryHeap = new MaxBinaryHeap();
console.log(binaryHeap.extractMax());
binaryHeap.displayHeap();
console.log(binaryHeap.extractMax());
binaryHeap.displayHeap();