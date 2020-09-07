// Create a function average that accepts no arguments, and returns a function
// (that will accept either a number as its lone argument, or no arguments at all).
// When the returned function is invoked with a number, the output should be average
// of all the numbers have ever been passed into that function (duplicate numbers count just like any other number).
// When the returned function is invoked with no arguments, the current average is outputted.
// If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

// declare a function that accepts no arguments
// declare a variable to store number of times function gets called with arguments
// declare a variable to store the accumulated sum of arguments
// returns a function that will either have a param or not
// if there is no arguement: and if it has not been called before, return 0; else return average
// if there is an argument; increment counter and add input into acc sum; divide sum by counter for average

function average() {
  let sum = 0;
  let cache = 0;
  function closureFn(arg) {
    if (!arg && sum === 0) return 0;
    if (!arg) {
      return sum / cache;
    }
    sum += arg;
    cache += 1;
    return sum / cache;
  }
  return closureFn;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// function average() {
//   let timesCalled = 0;
//   let accSum = 0;
//   return function closureFn(input) {
//     if (!input) {
//       if (timesCalled === 0) {
//         return 0;
//       }
//       return accSum / timesCalled;
//     }
//     timesCalled += 1;
//     accSum += input;
//     return accSum / timesCalled;
//   };
// }
