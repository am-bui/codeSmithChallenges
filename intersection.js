// Construct a function intersection that compares input arrays
// and returns a new array with elements found in all of the inputs.
// BONUS: Use reduce!

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 1; i < array.length; i += 1) {
    const current = array[i];
    accumulator = callback(accumulator, current);
  }
  return accumulator;
}

function filter(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    const element = array1[i];
    if (array2.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}
function intersection(...arrayOfArrays) {
  return reduce(arrayOfArrays, filter, arrayOfArrays[0]);
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
); // should log: [5, 15]

// function intersection(arrayOfArrays){}
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
