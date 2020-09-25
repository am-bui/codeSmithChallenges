/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// Get the length of an array using recursion without accessing its length property.

// Input: {Array} array - array whose length is sought
// Output: {Number}

// base case: if array at the index is undefined, return index
// we have to increase index before the recursion because we want to count the existing elements
// increment the index
// recursively call getLength on the array and the updated index

function getLength(array, index = 0) {
  if (!array[index]) {
    return index;
  }
  index++;
  return getLength(array, index);
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
