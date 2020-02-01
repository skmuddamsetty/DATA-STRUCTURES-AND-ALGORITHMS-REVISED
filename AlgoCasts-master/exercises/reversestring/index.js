// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

function reverse_using_enhanced_for_loop(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverse_using_reverse_method(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverse_using_reduce_helper(str) {
  return str.split('').reduce((reversed, currChar) => {
    return currChar + reversed;
  }, '');
}

reverse('abcd');

module.exports = {
  reverse,
  reverse_using_reverse_method,
  reverse_using_enhanced_for_loop,
  reverse_using_reduce_helper
};
