/* eslint-disable no-param-reassign */
/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum 
of its argument and the argument that was originally past to "add"

Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

function add(num) {
  function inner(arg) {
    num += arg;
    return num;
  }
  return inner;
}

/*
function add(startNum) {
  // declare a variable sum to keep track of sum
  let sum = 0;
  // declare a variable count to keep track of times invoked
  let count = 0;
  // return/declare a function that accepts a number
  return function closureFn(num) {
    // increment count
    count++;
    // if count is 1, add first arg with inner func arg
    // add into sum variable
    if (count === 1) {
      sum = startNum + num;
      return sum;
    }
    // if count is greater than 1, sum += arg
    if (count > 1) {
      sum += num;
      return sum;
    }
  };
}
*/

const addBy10 = add(10);
console.log(addBy10(20)); // -> 30
console.log(addBy10(20)); // 50
console.log(addBy10(20)); // 70
