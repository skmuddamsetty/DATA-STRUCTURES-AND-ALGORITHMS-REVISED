const { Node, BinaryTree } = require('./index');
let bt;
let root1;
let root2;
test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Binary Tree is setup properly', () => {
  expect(root1.left.key).toEqual(7);
  expect(root1.right.key).toEqual(10);
  expect(root1.right.right.key).toEqual(9);
});

test('Print the Inorder Array of the Binary Tree', () => {
  bt.inOrder_recursive(root1);
  expect(console.log.mock.calls[0][0]).toEqual(8);
  expect(console.log.mock.calls[1][0]).toEqual(7);
  expect(console.log.mock.calls[2][0]).toEqual(5);
  expect(console.log.mock.calls[3][0]).toEqual(6);
  expect(console.log.mock.calls[4][0]).toEqual(11);
  expect(console.log.mock.calls[5][0]).toEqual(2);
  expect(console.log.mock.calls[6][0]).toEqual(10);
  expect(console.log.mock.calls[7][0]).toEqual(4);
  expect(console.log.mock.calls[8][0]).toEqual(9);
});

test('Print the PreOrder Array of the Binary Tree', () => {
  bt.preOrder_recursive(root1);
  expect(console.log.mock.calls[0][0]).toEqual(2);
  expect(console.log.mock.calls[1][0]).toEqual(7);
  expect(console.log.mock.calls[2][0]).toEqual(8);
  expect(console.log.mock.calls[3][0]).toEqual(6);
  expect(console.log.mock.calls[4][0]).toEqual(5);
  expect(console.log.mock.calls[5][0]).toEqual(11);
  expect(console.log.mock.calls[6][0]).toEqual(10);
  expect(console.log.mock.calls[7][0]).toEqual(9);
  expect(console.log.mock.calls[8][0]).toEqual(4);
});

test('Print the PostOrder Array of the Binary Tree', () => {
  bt.postOrder_recursive(root1);
  expect(console.log.mock.calls[0][0]).toEqual(8);
  expect(console.log.mock.calls[1][0]).toEqual(5);
  expect(console.log.mock.calls[2][0]).toEqual(11);
  expect(console.log.mock.calls[3][0]).toEqual(6);
  expect(console.log.mock.calls[4][0]).toEqual(7);
  expect(console.log.mock.calls[5][0]).toEqual(4);
  expect(console.log.mock.calls[6][0]).toEqual(9);
  expect(console.log.mock.calls[7][0]).toEqual(10);
  expect(console.log.mock.calls[8][0]).toEqual(2);
});

test('Sum of all nodes in the binary tree', () => {
  let sum = bt.getSumOfAllNodes(root1);
  expect(sum).toEqual(62);
});

test('Number of nodes in the binary tree', () => {
  let numOfNodes = bt.getNumberOfNodes(root1);
  expect(numOfNodes).toEqual(9);
});

test('Number of nodes in the binary tree', () => {
  let numOfLeafNodes = bt.getNumberOfLeafNodes(root1);
  expect(numOfLeafNodes).toEqual(4);
});

test('Height of Binary Tree Recursive', () => {
  expect(bt.heightOfBinaryTree_recursive(root1)).toEqual(4);
  expect(bt.heightOfBinaryTree_recursive(root2)).toEqual(3);
});

test('Print Elements at given level', () => {
  bt.printElementsAtGivenLevel_Recursive(root1, 1);
  expect(console.log.mock.calls[0][0]).toEqual(2);
  bt.printElementsAtGivenLevel_Recursive(root1, 2);
  expect(console.log.mock.calls[1][0]).toEqual(7);
  expect(console.log.mock.calls[2][0]).toEqual(10);
  bt.printElementsAtGivenLevel_Recursive(root1, 3);
  expect(console.log.mock.calls[3][0]).toEqual(8);
  expect(console.log.mock.calls[4][0]).toEqual(6);
  expect(console.log.mock.calls[5][0]).toEqual(9);
});

test('Print Elements at at all levels in level order using recursion', () => {
  bt.printElementsInLevelOrder_recursive(root1, 1);
  expect(console.log.mock.calls[0][0]).toEqual(2);
  expect(console.log.mock.calls[1][0]).toEqual(7);
  expect(console.log.mock.calls[2][0]).toEqual(10);
  expect(console.log.mock.calls[3][0]).toEqual(8);
  expect(console.log.mock.calls[4][0]).toEqual(6);
  expect(console.log.mock.calls[5][0]).toEqual(9);
  expect(console.log.mock.calls[6][0]).toEqual(5);
  expect(console.log.mock.calls[7][0]).toEqual(11);
  expect(console.log.mock.calls[8][0]).toEqual(4);
});

beforeEach(() => {
  /**
   *                           2
   *                        /    \
   *                      7       10
   *                    /  \       \
   *                   8   6        9
   *                     /  \      /
   *                    5   11    4
   */
  bt = new BinaryTree();
  root1 = new Node(2);
  root1.left = new Node(7);
  root1.right = new Node(10);
  root1.left.left = new Node(8);
  root1.left.right = new Node(6);
  root1.left.right.left = new Node(5);
  root1.left.right.right = new Node(11);
  root1.right.right = new Node(9);
  root1.right.right.left = new Node(4);

  root2 = new Node(15);
  root2.left = new Node(10);
  root2.right = new Node(20);
  root2.left.left = new Node(8);
  root2.left.right = new Node(12);
  root2.right.left = new Node(16);
  root2.right.right = new Node(25);
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});
