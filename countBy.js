// Create a function countBy that accepts an array and a callback, and returns an object.
// countBy will iterate through the array and perform the callback on each element.
// Each return value from the callback will be saved as a key on the object.
// The value associated with each key will be the number of times that particular return value was returned.

const nums = [1, 2, 3, 4, 5];

function countBy(array, callback) {
  const obj = {};
  let countOdd = 0;
  let countEven = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i]) === 'odd') {
      countOdd += 1;
      obj[callback(array[i])] = countOdd;
    } else {
      countEven += 1;
      obj[callback(array[i])] = countEven;
    }
  }

  return obj;
}

function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
}

console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
