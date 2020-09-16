// Write a function that takes an array of functions and a number that will be piped
// through all those functions. The input number passes through the first function,
// whose output is passed as input to the second function, whose output is passed as
// input to the third function, and so on. Use recursion to return the final output of
// the last function in the array.

// Input 1: {Number} input - number flowing through all functions
// Input 2: {Array} funcArray - array of functions to pass input through
// Output: {Number} - final output of final function

function flow(input, arrOfFuncs, index = 0) {
  // base case: if the index is equal to the length of the array, return input
  if (index === arrOfFuncs.length) {
    return input; // input is just a placeholder; its value will change with each recursive call
  }
  // create a variable and assign it the result of calling the arrOfFuncs at index on input
  const output = arrOfFuncs[index](input);
  // return the recursive call of flow on the output, the array, and the incremented index
  return flow(output, arrOfFuncs, index + 1);
}

function multiplyBy2(num) {
  return num * 2;
}
function add7(num) {
  return num + 7;
}
function modulo4(num) {
  return num % 4;
}
function subtract10(num) {
  return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
