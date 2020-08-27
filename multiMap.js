// Construct a function multiMap that will accept two arrays:
// an array of values and an array of callbacks.
// multiMap will return an object whose keys match the elements in the array of values.
// The corresponding values that are assigned to the keys will be arrays
// consisting of outputs from the array of callbacks, where the input to each callback is the key.

// input: 2 arrays
// output: object

// declare a function that accepts an array of strings and an array of callback functions
// initialize an empty object
// grab a string in items
// iterate through items array
// declare a variable key to store the string at index i
// initialize an empty array. this will be the value of key
// call each callback on the current string and push it into the array
// iterate through functions array
// call the callback on the string
// store this in a variable called alter
// because obj[key] is an empty array, push alter into the empty array
// exit loop
// return object

const items = ['catfood', 'glue', 'beer'];

function multiMap(arrStrs, arrCbs) {
  const obj = {};
  for (let i = 0; i < arrStrs.length; i += 1) {
    const key = arrStrs[i];
    obj[key] = [];
    for (let j = 0; j < arrCbs.length; j += 1) {
      const alter = arrCbs[j](key);
      obj[key].push(alter);
    }
  }
  return obj;
}

// callbacks
function uppercaser(str) {
  return str.toUpperCase();
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
  return str + str;
}

const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
