class Node {
    constructor(letter) {
        this.letter = letter;
        this.isEndOfString = false;
        this.left = null;
        this.right = null;
        this.eq = null;
    }
}

class TST {

    constructor() {
        this.root = null;
    }

    insert(letter) {
        let newNode = new Node(letter);
        if (!root) root = newNode;

        

    }
}