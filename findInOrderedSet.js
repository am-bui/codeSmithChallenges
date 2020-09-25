/*
Write a recursive function findInOrderedSet that determines if 
a number is in an ordered array. Assume the array is sorted. 
BONUS: Write the function in such a way that fully 
iterating through the array to check isn't necessary.
*/

function findInOrderedSet(arr, target, index = 0) {
  // if the arr at index matches the target, return true
  let counter = index;
  if (arr[index] === target) {
    return true;
  }
  if (!arr[index]) {
    return false;
  }
  // else return false
  // return fIOS(arr, target, index) // increment index
  counter += 1;
  return findInOrderedSet(arr, target, counter);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false
