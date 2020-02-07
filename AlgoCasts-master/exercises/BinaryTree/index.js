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

  getSumOfAllNodes(root) {
    // base case
    if (!root) {
      return 0;
    }
    // recursively calling the getSumOfAllNodes with left and right nodes
    return (
      root.key +
      this.getSumOfAllNodes(root.left) +
      this.getSumOfAllNodes(root.right)
    );
  }

  getNumberOfNodes(root) {
    // base case
    if (!root) {
      return 0;
    }
    // recursively calling the getNumberOfNodes with left and right nodes
    return (
      1 + this.getNumberOfNodes(root.left) + this.getNumberOfNodes(root.right)
    );
  }

  getNumberOfLeafNodes(root) {
    // base case
    if (!root) {
      return 0;
    }
    // if there is no left node or right node
    if (!root.left && !root.right) {
      return 1;
    }
    // recursively calling the getNumberOfLeafNodes with left and right nodes
    return (
      this.getNumberOfLeafNodes(root.left) +
      this.getNumberOfLeafNodes(root.right)
    );
  }
}

module.exports = { BinaryTree, Node };
