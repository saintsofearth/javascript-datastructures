
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val < current.value) {
                    // console.log('On left of root');
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val) {
        if (!this.root) {
            return undefined;
        }
        let current = this.root;
        while (true) {
            if (val === current.value) {
                return true;
            } else if (val > current.value) {
                // Move to right subtree
                if (!current.right) {
                    return false;
                } else {
                    current = current.right;
                }
            } else if (val < current.value) {
                // Move to left subtree
                if (!current.left) {
                    return false;
                } else {
                    current = current.left;
                }
            }
        }
    }
}



let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(12);
tree.insert(4);
console.log(tree);

console.log(tree.find(12));
console.log(tree.find(5));
console.log(tree.find(16));