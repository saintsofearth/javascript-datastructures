class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let currRoot = this.root;
        while (true) {
            if (val < currRoot.val) {
                // Move this node to left subtree
                if (currRoot.left === null) {
                    currRoot.left = newNode;
                    return this;
                }
                currRoot = currRoot.left;
            } else if (val > currRoot.val) {
                // Move this node to right subtree
                if (currRoot.right === null) {
                    currRoot.right = newNode;
                    return this;
                }
                currRoot = currRoot.right;
            }
        }
    }

    bfs() {
        let queue = [];
        let visited = [];
        if (!this.root) {
            console.log("Tree is empty");
            return;
        }
        let currRoot = this.root;
        queue.push(currRoot);
        let node;
        while (queue.length !== 0) {
            node = queue.shift();
            visited.push(node);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        return visited;
    }

    preOrder() {
        let visited = [];
        if (this.root === null) {
            console.log("Tree is empty - Traversal failed");
            return;
        }
        let currRoot = this.root;
        function traverse(node) {
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(currRoot);
        return visited;
    }

    postOrder() {
        let visited = [];
        if (this.root === null) {
            console.log("Tree is empty - Traversal failed");
            return visited;
        }
        let currRoot = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(currRoot);
        return visited;
    }

    inOrder() {
        let visited = [];
        if (this.root === null) {
            console.log('Tree is empty - Traversal failed');
            return visited;
        }
        let currRoot = this.root;
        function traverse(node) {
            if (node.left !== null) traverse(node.left);
            visited.push(node.val);
            if (node.right !== null) traverse(node.right);
        }
        traverse(currRoot);
        return visited;
    }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.bfs());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());