/* eslint-disable no-param-reassign */
// Create a function pipe that accepts an array (of functions) and a value.
// pipe should input the value into the first function in the array,
// and then use the output from that function as input for the second
// function, and then use the output from that function as input for the
// third function, and so forth, until we have an output from the last
// function in the array. pipe should return the final output.

function pipe(arrOfFuncs, value) {
  for (let i = 0; i < arrOfFuncs.length; i += 1) {
    value = arrOfFuncs[i](value);
  }
  return value;
}

const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;

const capAddlowRepeat = [capitalize, addLowerCase, repeat];

console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
