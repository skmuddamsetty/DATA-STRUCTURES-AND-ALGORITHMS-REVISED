// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(reversed) * Math.sign(n);
}

function reverseInt_sol_1(n) {
  let reversed = 0;
  let num = Math.abs(n);
  while (num !== 0) {
    const lastNum = num % 10;
    reversed = reversed * 10 + lastNum;
    num = Math.floor(num / 10);
  }
  return reversed * Math.sign(n);
}

reverseInt_sol_1(123);

module.exports = { reverseInt, reverseInt_sol_1 };
