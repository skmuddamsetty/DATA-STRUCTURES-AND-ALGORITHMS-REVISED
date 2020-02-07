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

  /*
    Calculate height of binary tree | Iterative & Recursive
    
    Write an efficient algorithm to compute the height of binary tree. The height or depth of a tree is number of edges or nodes on longest path from root node to leaf node.

    
    The program should consider number of nodes in the longest path. For example, height of an empty tree is 0 and height of tree with only one node is 1.

    

    The idea is to traverse the tree in post-order fashion and calculate the height of left and right subtree. The height of the subtree rooted at any node will be equal to maximum height of its left and right subtree plus one. We recursively apply this property to all tree nodes in bottom-up manner (post-order fashion) and return maximum height of the subtree rooted at that node.

    Iterative solution –
 
    In iterative version, we perform level order traversal of the tree. The height of the tree is equal to number of levels in the tree.
  */

  heightOfBinaryTree_recursive(root) {
    // Base case: empty tree has height 0
    if (!root) {
      return 0;
    }
    // recur for left and right subtree and consider maximum depth
    return (
      1 +
      Math.max(
        this.heightOfBinaryTree_recursive(root.left),
        this.heightOfBinaryTree_recursive(root.right)
      )
    );
  }

  // Print elements at given level in Binary Tree
  printElementsAtGivenLevel_Recursive(root, level) {
    if (!root) {
      return;
    }
    if (level === 1) {
      console.log(root.key);
    }
    this.printElementsAtGivenLevel_Recursive(root.left, level - 1);
    this.printElementsAtGivenLevel_Recursive(root.right, level - 1);
  }

  // Print elements in Level order (Using Recursion)
  printElementsInLevelOrder_recursive(root) {
    const height = this.heightOfBinaryTree_recursive(root);
    for (let i = 0; i <= height; i++) {
      this.printElementsAtGivenLevel_Recursive(root, i + 1);
    }
  }
}

let bt = new BinaryTree();
let root = new Node(2);
root.left = new Node(7);
root.right = new Node(10);
root.left.left = new Node(8);
root.left.right = new Node(6);
root.left.right.left = new Node(5);
root.left.right.right = new Node(11);
root.right.right = new Node(9);
root.right.right.left = new Node(4);
module.exports = { BinaryTree, Node };
