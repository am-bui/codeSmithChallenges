// Write a function, callTimes, that returns a new function. The new function should
// return the number of times it’s been called.

function callTimes() {
  // declare variable counter that keeps track of number of times the inner function gets called
  let counter = 0;
  // declare a closure function that increments counter and returns counter
  function closureFn() {
    counter += 1;
    return counter;
  }
  return closureFn;
}

// /*** Uncomment these to check your work! ***/
const myNewFunc1 = callTimes();
const myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2
