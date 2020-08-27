/* eslint-disable no-unused-vars */
// Create a function highestFunc that accepts an object (which will contain functions)
// and a subject (which is any value). highestFunc should return the key of the object
// whose associated value (which will be a function) returns the largest number,
// when the subject is given as input.

function highestFunc(objOfFuncs, subject) {
  let largestNum = Number.NEGATIVE_INFINITY;
  let largeKey;

  for (const [key, func] of Object.entries(objOfFuncs)) {
    if (func(subject) > largestNum) {
      largestNum = func(subject);
      largeKey = key;
    }
  }
  return largeKey;
}

const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;

console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
