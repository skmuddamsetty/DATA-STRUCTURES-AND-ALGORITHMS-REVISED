const { anagrams, anagrams_sol_1 } = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});

// anagrams_sol_1
test('anagrams_sol_1 function exists', () => {
  expect(typeof anagrams_sol_1).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams_sol_1('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams_sol_1('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams_sol_1('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams_sol_1('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagrams_sol_1('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});
