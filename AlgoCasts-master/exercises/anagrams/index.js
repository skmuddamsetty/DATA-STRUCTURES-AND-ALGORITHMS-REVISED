// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // using regex to replace the special characters and spaces
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  // return false if the length of the strings are not equals
  if (stringA.length !== stringB.length) return false;
  // preparing charMaps for both strings
  let charMapA = buildCharMap(stringA);
  let charMapB = buildCharMap(stringB);
  // loop through any of the charMap. I'm looping through charMapA
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  let charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams_sol_1(stringA, stringB) {
  return (
    sortString(formatString(stringA)) === sortString(formatString(stringB))
  );
}

function formatString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

function sortString(str) {
  return str
    .split('')
    .sort()
    .join('');
}

module.exports = { anagrams, anagrams_sol_1 };
