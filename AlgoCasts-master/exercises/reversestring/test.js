const {
  reverse,
  reverse_using_reverse_method,
  reverse_using_enhanced_for_loop,
  reverse_using_reduce_helper
} = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

// test cases for reverse_using_reverse_method
test('reverse_using_reverse_method function exists', () => {
  expect(reverse_using_reverse_method).toBeDefined();
});

test('reverse_using_reverse_method reverses a string', () => {
  expect(reverse_using_reverse_method('john doe')).toEqual('eod nhoj');
});

test('reverse_using_reverse_method reverses a string', () => {
  expect(reverse_using_reverse_method('sunrise')).toEqual('esirnus');
});

// test cases for reverse_using_enhanced_for_loop
test('reverse_using_enhanced_for_loop function exists', () => {
  expect(reverse_using_enhanced_for_loop).toBeDefined();
});

test('reverse_using_enhanced_for_loop reverses a string', () => {
  expect(reverse_using_enhanced_for_loop('sunrise')).toEqual('esirnus');
});

// test cases for reverse_using_reduce_helper
test('reverse_using_reduce_helper function exists', () => {
  expect(reverse_using_reduce_helper).toBeDefined();
});

test('reverse_using_reduce_helper reverses a string', () => {
  expect(reverse_using_reduce_helper('sunrise')).toEqual('esirnus');
});
