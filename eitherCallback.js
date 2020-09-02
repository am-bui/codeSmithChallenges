// The result of using eitherCallback to combine two callbacks into one callback and
// then passing that one callback into filterArray should match the results of
// simply passing the two callbacks into eitherFilter in the previous challenge.

function eitherCallback(callback1, callback2) {
  function mergedCallbacks(currentElement) {
    let value = currentElement;
    if (callback1(value)) {
      value = callback1(value);
    } else {
      value = callback2(value);
    }
    return value;
  }
  return mergedCallbacks;
}

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]); // callback(currentElement,index,array)
  }
  return newArray;
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);

console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

/*
v.2

function eitherCallback(callback1, callback2) {
  return function mergedCallback(...args) {
    if (callback1(args[0])) {
      return true;
    }
    if (callback2(args[0])) return true;
  };
}
 */
