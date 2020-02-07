class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  inOrder_recursive(root) {
    // base case
    if (!root) return;
    // calling the function recursively to process the left node first
    this.inOrder_recursive(root.left);
    // process the current node
    console.log(root.key);
    // calling the function recursively to process the right node last
    this.inOrder_recursive(root.right);
  }

  preOrder_recursive(root) {
    // base case
    if (!root) return;
    // process the current node first
    console.log(root.key);
    // calling the function recursively to process the left node second
    this.preOrder_recursive(root.left);
    // calling the function recursively to process the right node last
    this.preOrder_recursive(root.right);
  }

  postOrder_recursive(root) {
    // base case
    if (!root) return;
    // calling the function recursively to process the left node first
    this.postOrder_recursive(root.left);
    // calling the function recursively to process the right node second
    this.postOrder_recursive(root.right);
    // process the current node last
    console.log(root.key);
  }
}

module.exports = { BinaryTree, Node };
