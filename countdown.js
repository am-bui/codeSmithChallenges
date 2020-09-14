// Write a recursive function countdown that accepts a positive integer n
// as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.

function countdown(n) {
  // base case: if n is 0, return
  if (n === 0) {
    return;
  }
  // console.log(n)
  console.log(n);
  // return countdown with the decremented n
  return countdown(n - 1);
}

countdown(5); // 5 , 4 , 3 , 2 , 1
countdown(10);
