/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// Write a recursive function sum that calculates the sum of an array of integers.

function sum(array, index = 0, acc = 0) {
  if (!array[index]) {
    return acc;
  }
  let accSum = acc;
  accSum += array[index++];
  return sum(array, index, accSum);
}

console.log(sum([1, 1, 1])); // -> returns 3
console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21

/* 
with comments:

function sum(array, index = 0, accSum = 0) {
  // if there is no element in the array at the index, return acc
  if (!array[index]) {
    return accSum;
  }
  // reassign acc to the value of adding the array at the current index to the accumulated value
  // increment index after add value into acc
  acc += array[index++];
  // return sum(array, index, accSum)
  return sum(array, index, accSum);
}
*/
