// arrToObj should return an object that has elements from the passed-in array as keys,
// and the outputs from the callback (when those elements are passed in) as the corresponding values.

function arrToObj(array, callback) {
  const obj = {};
  for (let i = 0; i < array.length; i += 1) {
    obj[array[i]] = callback(array[i]);
  }
  return obj;
}

const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
