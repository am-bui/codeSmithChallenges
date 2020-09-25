/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
// Write a function "getLength" that returns the length of a string.
// Accomplish this without using any loops, native JS methods, or the length property.

/*
A recursive function solves repetitive problems by calling itself.
With each recursive call, the function breaks down the input into
the smallest possible solution to give us the result we want.
the Structure in implementing recursion:
BASE CASE: is the simplest, smallest instance of the problem, that can’t be decomposed any further.
RECURSIVE STEP: transforms the problem into something smaller, that gets us closer to base case
*/

// declare a function getLength that accepts a string
// and an index parameter that stores the starting value of 0
// if there isn't a character at this index, return the index
// increment index
// recursively call the function with the string and the updated index as args

function getLength(string, index = 0) {
  if (!string[index]) {
    return index;
  }
  index++;
  return getLength(string, index);
}

console.log(getLength('hello')); // -> 5
