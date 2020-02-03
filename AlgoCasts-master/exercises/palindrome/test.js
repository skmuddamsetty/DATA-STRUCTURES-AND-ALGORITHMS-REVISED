const { palindrome, palindrome_sol_1 } = require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});

// palindrome_sol_1 test cases

test('palindrome_sol_1 function is defined', () => {
  expect(typeof palindrome_sol_1).toEqual('function');
});

test('"aba" is a palindrome_sol_1', () => {
  expect(palindrome_sol_1('aba')).toBeTruthy();
});

test('" aba" is not a palindrome_sol_1', () => {
  expect(palindrome_sol_1(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome_sol_1', () => {
  expect(palindrome_sol_1('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome_sol_1', () => {
  expect(palindrome_sol_1('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome_sol_1', () => {
  expect(palindrome_sol_1('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome_sol_1', () => {
  expect(palindrome_sol_1('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome_sol_1', () => {
  expect(palindrome_sol_1('pennep')).toBeTruthy();
});
