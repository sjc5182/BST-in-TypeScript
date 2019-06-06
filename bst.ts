class BSTNode {
  value: number;
  left: null;
  right: null
  // constructor(public value: number) // this is same as writtng like "value: number and constructor gets pram value and assign it back to object body"
  constructor(value: number){
    this.value = value
  }
}

class BinarySearchTree {
  constructor(public root: null){
  }

  public insert(value: number){
    var newNode = new BSTNode(value)
    
  }
}

const bst = new BSTNode(3)
console.log(bst)