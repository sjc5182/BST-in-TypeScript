var BSTNode = /** @class */ (function () {
    // constructor(public value: number) // this is same as writtng like "value: number and constructor gets pram value and assign it back to object body"
    function BSTNode(value) {
        this.value = value;
    }
    return BSTNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(root) {
        this.root = root;
    }
    return BinarySearchTree;
}());
var bst = new BSTNode(3);
console.log(bst);
