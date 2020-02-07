const { Node, BinaryTree } = require('./index');
const bt = new BinaryTree();

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Binary Tree is setup properly', () => {
  expect(bt.root.left.key).toEqual(7);
  expect(bt.root.right.key).toEqual(10);
  expect(bt.root.right.right.key).toEqual(9);
});

test('Print the Inorder Array of the Binary Tree', () => {
  bt.inOrder_recursive(bt.root);
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
  bt.preOrder_recursive(bt.root);
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
  bt.postOrder_recursive(bt.root);
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
  bt.root = new Node(2);
  bt.root.left = new Node(7);
  bt.root.right = new Node(10);
  bt.root.left.left = new Node(8);
  bt.root.left.right = new Node(6);
  bt.root.left.right.left = new Node(5);
  bt.root.left.right.right = new Node(11);
  bt.root.right.right = new Node(9);
  bt.root.right.right.left = new Node(4);
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});
