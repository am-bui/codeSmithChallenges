/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

/*
Iterate through the array and call each callback on the value passed in.
if at any point the output is false, the 'passAllTests' function will return false
other wise return true
*/

function passAllTests(arrOfFuncs, value) {
  for (let i = 0; i < arrOfFuncs.length; i++) {
    if (!arrOfFuncs[i](value)) {
      return false;
    }
  }
  return true;
}
