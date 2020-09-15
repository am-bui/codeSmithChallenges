// Get the length of an array using recursion without accessing its length property.

// Input: {Array} array - array whose length is sought
// Output: {Number}

function getLength(array, index = 0) {
  // base case: if array at the index is undefined, return index
  if (!array[index]) {
    return index;
  }
  // we have to increase index before the recursion because we want to count the existing elements
  // increment the index and store the value in a variable
  const incIndex = index + 1;
  // recursively call getLength on the array and the updated index
  return getLength(array, incIndex);
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
