/*
Write a recursive function flattenRecursively that flattens a nested array. 
Your function should be able to handle varying levels of nesting.
*/

function flattenRecursively(arr) {
  // declare a variable newArray and assign it the value of an array literal
  const newArray = [];
  // for loop through every element of the array
  for (let i = 0; i < arr.length; i += 1) {
    // if the element is an array
    if (Array.isArray(arr[i])) {
      // return recursively call flattenRecursively() on this nested array
      newArray.push(...flattenRecursively(arr[i]));
      // else push the element onto a newArray
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(flattenRecursively([1, [2, 3, [4]]])); // -> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); // -> [1, {}, 3, 4]
