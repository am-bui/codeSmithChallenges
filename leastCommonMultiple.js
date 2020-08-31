// Create a function leastCommonMultiple that takes two numbers (integers)
// as input and returns the lowest number which is a multiple of both inputs.

// The lcm is the absolute product of num1 and num2 divided by their greatest common divisor

// Find gcd using the Euclidean algorithm:
// assign a to be the larger number of the two nums
// while a % b is greater than 0,
// first, assign r (remainder) to be the result of a % b
// next, reassign a to be b and reassign b to be r
// last, return b when the while loop condition is no longer met

function gcd(num1, num2) {
  let a;
  let b;
  let r;

  if (num1 < num2) {
    b = num1;
    a = num2;
  } else {
    a = num1;
    b = num2;
  }

  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return b;
}

function leastCommonMultiple(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

console.log(leastCommonMultiple(2, 3)); //= > 6
console.log(leastCommonMultiple(6, 10)); //= > 30
console.log(leastCommonMultiple(24, 26)); //= > 312
