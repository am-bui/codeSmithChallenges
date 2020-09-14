// Write a recursive function isPrime that determines if a number is prime and returns true if it is.

// add x to param and assign it the value of 2
function isPrime(num, x = 2) {
  // if num is 1, return true
  if (num === 1) {
    return true;
  }
  // x will be incremented with each recursive call
  // if x reaches num, return true
  if (x === num) {
    return true;
  }
  // check if num mod x strictly equals 0, return false
  if (num % x === 0) {
    return false;
  }
  // increment x
  // return isPrime with appropriate params
  return isPrime(num, x + 1);
}

console.log(isPrime(1)); // -> false
console.log(isPrime(2)); // -> true
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false
