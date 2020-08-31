/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// Create a function arrayBuilder that takes in a count object and returns an array
// filled with the appropriate numbers of elements. The order of the elements in the
// array does not matter, but repeated elements should be grouped.

function arrayBuilder(count) {
  const array = [];
  for (const key in count) {
    for (let i = 0; i < count[key]; i += 1) {
      array.push(key);
    }
  }
  return array;
}

console.log(arrayBuilder({ cats: 2, dogs: 1 })); //= > ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //= > []
