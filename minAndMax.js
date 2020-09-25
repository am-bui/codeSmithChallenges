/* eslint-disable no-plusplus */
/*
Create a function 'minAndMax' that takes an array of numbers and returns 
both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. 
For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

function minAndMax(array) {
  const newArray = [];
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  newArray.push(min, max);
  return newArray;
}

console.log(minAndMax([7, 68, 2, 19])); // [2, 68]
