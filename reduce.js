// The function reduce takes an array and reduces the elements to a single value.
// For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

// input: array
// output: a single value

const nums = [4, 1, 3];
const add = function(a, b) {
  return a + b;
};

// declare a function called reduce
// it will take an array, a callback, and an initial value as params
// declare a variable called accumulator and assign it the value of the inital value
// iterate through the array
// invoke the callback with its arguments being accumulator and current element
// reassign the accumulator's value with the evaluation of running callback
// exit loop
// return accumulator

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    accumulator = callback(accumulator, current);
  }
  return accumulator;
}

console.log(reduce(nums, add, 0)); // -> 8
