const { chunk, chunk_sol_1, chunk_sol_2 } = require('./index');

test('function chunk exists', () => {
  expect(typeof chunk).toEqual('function');
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([
    [1, 2, 3],
    [4, 5]
  ]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk(arr, 5);

  expect(chunked).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13]
  ]);
});

// chunk_sol_1 test cases
test('function chunk_sol_1 exists', () => {
  expect(typeof chunk_sol_1).toEqual('function');
});

test('chunk_sol_1 divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk_sol_1(arr, 2);

  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ]);
});

test('chunk_sol_1 divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = chunk_sol_1(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk_sol_1 divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk_sol_1(arr, 3);

  expect(chunked).toEqual([
    [1, 2, 3],
    [4, 5]
  ]);
});

test('chunk_sol_1 divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk_sol_1(arr, 5);

  expect(chunked).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13]
  ]);
});

// chunk_sol_2 test cases
test('function chunk_sol_2 exists', () => {
  expect(typeof chunk_sol_2).toEqual('function');
});

test('chunk_sol_2 divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk_sol_2(arr, 2);

  expect(chunked).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ]);
});

test('chunk_sol_2 divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = chunk_sol_2(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk_sol_2 divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk_sol_2(arr, 3);

  expect(chunked).toEqual([
    [1, 2, 3],
    [4, 5]
  ]);
});

test('chunk_sol_2 divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk_sol_2(arr, 5);

  expect(chunked).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13]
  ]);
});
