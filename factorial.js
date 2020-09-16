// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

// Input: {Number} num - number whose factorial is sought
// Output: {Number}

function factorial(num, product = 1) {
  // termination case: if num is less than 0, return to prevent recusion from running
  if (num < 0) return `Please input a positive integer.`;
  // base case: when num has reach 0, return the product
  if (num === 0) return product;
  // declare a variable that multiplies num by the product
  const multiplyProduct = num * product;
  // declare a variable that decrements num
  const decNum = num - 1;
  // return the evaluated result of using recursion, calling factorial with updated inputs
  return factorial(decNum, multiplyProduct);
}

console.log(factorial(4));
console.log(factorial(-1));
console.log(factorial(6));
