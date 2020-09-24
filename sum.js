/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// Write a recursive function sum that calculates the sum of an array of integers.

function sum(array) {
  if (array.length === 0) return 0;
  return array[0] + sum.slice(1);
}

console.log(sum([1, 1, 1])); // -> returns 3
console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21

/* 
prev solution:

function sum(array, index = 0, acc = 0) {
  if (!array[index]) {
    return acc;
  }
  let accSum = acc;
  accSum += array[index++];
  return sum(array, index, accSum);
}
*/
