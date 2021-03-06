/*
    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    Note: For the purpose of this problem, we define empty string as valid palindrome.

    Example 1:

    Input: "A man, a plan, a canal: Panama"
    Output: true
    Example 2:

    Input: "race a car"
    Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let formattedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversedStr = formattedStr
    .split('')
    .reverse()
    .join('')
    .toLowerCase();
  return reversedStr === formattedStr;
};

module.exports = { isPalindrome };
