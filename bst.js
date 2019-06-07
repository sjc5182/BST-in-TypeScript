var BSTNode = /** @class */ (function () {
    // constructor(public value: number) // this is same as writtng like "value: number and constructor gets pram value and assign it back to object body"
    function BSTNode(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
    return BSTNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = undefined;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new BSTNode(value);
        if (this.root == undefined) {
            this.root = newNode;
            return this;
        }
        else {
            var current = this.root;
            while (true) {
                if (current.value > value) {
                    if (current.left == undefined) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
                else if (current.value < value) {
                    if (current.right == undefined) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(5);
bst.insert(1);
bst.insert(9);
console.log(bst);
