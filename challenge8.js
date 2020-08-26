// Challenge 8

// Construct a function union that compares input arrays and returns a new array that contains all elements.
// If there are duplicate elements, only add it once to the new array.
// Preserve the order of the elements starting from the first element of the first input array.

// BONUS: Use reduce!

// input: an array of arrays
// output: an array containing all elements without duplicates

// declare a function called union that takes in an array of arrays
// declare a function called reducer with an array, a callback, and a initial value as params
// declare a variable accumulator and set its value to the initial value
// iterate through the array
// save the index of the array in a variable
// reassign accumulator to the value of calling callback with accumulator and current as args
// exit loop, return accumulator

// declare a function called iterator that compares two arrays
// join these arrays
// declare a variable and store into it an empty array
// iterate through joined
// save the current index of the array in a variable
// if the current element is not yet included in the array, push it into the empty array
// if it is, incrememnt i and check the condition again
// exit loop and return the new array

// return reduce(array, callback, initialValue)

function union(...arrays) {
  function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i += 1) {
      const current = array[i];
      accumulator = callback(accumulator, current);
    }
    return accumulator;
  }

  function iterator(array1, array2) {
    const joined = array1.concat(array2);
    const togetherNow = [];
    for (let i = 0; i < joined.length; i += 1) {
      const element = joined[i];
      if (!togetherNow.includes(element)) {
        togetherNow.push(element);
      }
    }
    return togetherNow;
  }

  return reduce(arrays, iterator, arrays[0]);
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]
