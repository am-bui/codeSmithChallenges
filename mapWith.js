// Create a function forEach which takes an array and a callback,
// and runs the callback on each element of the array. forEach does not return anything.
// Please do not use the native forEach or mapWith method.

function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

// Part 2
// Now let's rebuild mapWith
// This time instead of using a for loop, you're going to use the forEach we just created.

function mapWith(array, callback) {
  const result = [];
  function processAndAddToResult(element) {
    const processedElement = callback(element);
    result.push(processedElement);
  }
  forEach(array, processAndAddToResult);
  return result;
}

console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof mapWith); // should log: 'function'
console.log(mapWith([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]
