const {
  steps_using_for,
  steps_using_while,
  steps_sol_using_recursion
} = require('./index');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('steps_using_while is a function', () => {
  expect(typeof steps_using_while).toEqual('function');
});

test('steps_using_while called with n = 1', () => {
  steps_using_while(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('steps_using_while called with n = 2', () => {
  steps_using_while(2);
  expect(console.log.mock.calls[0][0]).toEqual('# ');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('steps_using_while called with n = 3', () => {
  steps_using_while(3);
  expect(console.log.mock.calls[0][0]).toEqual('#  ');
  expect(console.log.mock.calls[1][0]).toEqual('## ');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('steps_using_for is a function', () => {
  expect(typeof steps_using_for).toEqual('function');
});

test('steps_using_for called with n = 1', () => {
  steps_using_for(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('steps_using_for called with n = 2', () => {
  steps_using_for(2);
  expect(console.log.mock.calls[0][0]).toEqual('# ');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('steps_using_for called with n = 3', () => {
  steps_using_for(3);
  expect(console.log.mock.calls[0][0]).toEqual('#  ');
  expect(console.log.mock.calls[1][0]).toEqual('## ');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});

test('steps_sol_using_recursion is a function', () => {
  expect(typeof steps_sol_using_recursion).toEqual('function');
});

test('steps_sol_using_recursion called with n = 1', () => {
  steps_sol_using_recursion(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('steps_sol_using_recursion called with n = 2', () => {
  steps_sol_using_recursion(2);
  expect(console.log.mock.calls[0][0]).toEqual('# ');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('steps_sol_using_recursion called with n = 3', () => {
  steps_sol_using_recursion(3);
  expect(console.log.mock.calls[0][0]).toEqual('#  ');
  expect(console.log.mock.calls[1][0]).toEqual('## ');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(3);
});
