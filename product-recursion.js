/* eslint-disable no-param-reassign */
function product(arr, i = 0) {
  if (i === arr.length - 1) return arr[i];
  return arr[i] * product(arr, (i += 1));
}

console.log(product([1, 2, 3, 4])); // -> 24
console.log(product([1, 2, 3, 4, 5])); // -> 120
console.log(product([4, 5, 6])); // -> 120
