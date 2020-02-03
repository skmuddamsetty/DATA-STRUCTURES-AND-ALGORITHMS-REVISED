// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps_using_while(n) {
  let row = 0;
  let stair = '';
  let column = 0;
  while (row < n) {
    stair = '';
    column = 0;
    while (column < n) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
      column++;
    }
    console.log(stair);
    row++;
  }
}

function steps_using_for(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

function steps_sol_using_recursion(n, row = 0, stair = '') {
  // base case
  if (row === n) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    // added return here because we do not want the program to perform any logic after this step
    return steps_sol_using_recursion(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps_sol_using_recursion(n, row, stair);
}

module.exports = {
  steps_using_while,
  steps_using_for,
  steps_sol_using_recursion
};
