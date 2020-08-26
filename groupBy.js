// Create a function groupBy that accepts an array and a callback,
// and returns an object. groupBy will iterate through the array
// and perform the callback on each element. Each return value from
// the callback will be saved as a key on the object.
// The value associated with each key will be an array consisting
// of all the elements that resulted in that return value when passed into the callback.

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) {
  return Math.floor(num);
};

function groupBy(array, callback) {
  const obj = {};
  for (let i = 0; i < array.length; i += 1) {
    const key = callback(array[i]);
    if (obj[key] === undefined) {
      obj[key] = [];
    }
    obj[key].push(array[i]);
  }
  return obj;
}

console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
