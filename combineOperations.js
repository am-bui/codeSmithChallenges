// Create a function, combineOperations, that takes two parameters:
// a starting value and an array of functions. combineOperations should pass
// the starting value into the first function in the array. combineOperations should
// pass the value returned by the first function into the second function,
// and so on until every function in the array has been called. combineOperations should
// return the final value returned by the last function in the array.

function combineOperations(startVal, arrOfFuncs) {
  let output;
  for (let i = 0; i < arrOfFuncs.length; i += 1) {
    if (output === undefined) {
      output = arrOfFuncs[i](startVal);
    } else {
      output = arrOfFuncs[i](output);
    }
  }
  return output;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10
