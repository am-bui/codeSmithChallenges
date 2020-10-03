/*
Challenge 1: Select
Define a function select which takes two arguments, an array and a callback function. 
The callback function can be considered a test in that it will return either true 
or false depending on the input. select will iterate/loop through the array and 
pass each array element to the callback as an argument.

If the callback called on a certain value returns true, the original value 
(the input to the callback) is pushed to a new array. select will return this new array.
*/

// CHALLENGE 1 - ADD CODE BELOW

// create a named function expression and assign it an anon function
// that accepts an array and a callback
const select = (array, callback) => {
  // declare a variable 'newArray' and assign it the value of an empty array literal
  const newArray = [];
  // iterate through the array
  // call the callback on the current element of the array
  // if the evaluated result is true, push this element into the new array
  // eslint-disable-next-line array-callback-return
  array.filter(el => {
    if (callback(el)) newArray.push(el);
  });
  return newArray;
};

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const arr = [1, 2, 3, 4, 5];
const isEven = n => n % 2 === 0;
console.log(select(arr, isEven)); // should log: [2, 4]

/*
Challenge 2: Russian Roulette
Define a function russianRoulette that accepts a number (let us call it n), 
and returns a function. The returned function will take no arguments, 
and will return the string ‘click’ the first n - 1 number of times it is invoked. 
On the very next invocation (the nth invocation), the returned function will 
return the string ‘bang’. On every invocation after that, the returned function 
returns the string ‘reload to play again’.
*/

// CHALLENGE 2 - ADD CODE BELOW

// declare a function russianRoulette that accepts a number
function russianRoulette(n) {
  // declare a variable counter and assign it the starting value of 0
  let counter = 0;
  // return/declare a function that accepts no arguments
  return function() {
    // increment the counter
    counter += 1;
    // if counter is less than n, return 'click'
    if (counter < n) return 'click';
    // if counter is equal to n, return 'bang'
    if (counter === n) return 'bang';
    // if counter is greater than n, return 'reload to play again'
    if (counter > n) return 'reload to play again';
  };
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const play = russianRoulette(3);
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘click’
console.log(play()); // should log: ‘bang’
console.log(play()); // should log: ‘reload to play again’
console.log(play()); // should log: ‘reload to play again’

/*
Challenge 3: Golden Sequence
Define a function goldenSequence that takes a number n and 
returns n's corresponding Fibonacci number.

Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 - Each number is found by adding the previous two
 - The first two values, index 0 and index 1, of the sequence shall be 1 and 1

More Info: https://en.wikipedia.org/wiki/Fibonacci_number
*/

// CHALLENGE 3 - ADD CODE BELOW

// declare a function 'goldenSequence' that accepts a number
function goldenSequence(n) {
  // base case: if n is less than or equal to 1, return 1
  if (n <= 1) return 1;
  // return the recursive call of goldenSequence with the argument n minus 1
  // add this to the invocation of goldenSequence with n minus 2
  return goldenSequence(n - 1) + goldenSequence(n - 2);
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(goldenSequence(0)); // should log: 1
console.log(goldenSequence(1)); // should log: 1
console.log(goldenSequence(2)); // should log: 2
console.log(goldenSequence(3)); // should log: 3
console.log(goldenSequence(4)); // should log: 5
console.log(goldenSequence(12)); // should log: 233
