/* eslint-disable no-param-reassign */
// Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.

function pathFinder(obj, arr, index = 0) {
  if (!arr[index]) {
    return obj;
  }
  // eslint-disable-next-line no-plusplus
  const objIn = obj[arr[index++]];

  return pathFinder(objIn, arr, index);
}

const object = {
  first: { second: { third: 'finish' } },
  second: { third: 'wrong' },
};
const array = ['first', 'second', 'third'];
console.log(pathFinder(object, array)); // -> "finish"

/*
1.
function pathFinder(obj, arr, index = 0) {
	// if there is no element at the arr at index, return obj
  if (!arr[index]){
    return obj
  }
  // declare a new variable and assign its value to the value of the object's property the indexed value of array
  let newObj = obj[arr[index++]]
  return pathFinder(newObj, arr, index)
}

2.
function pathFinder(obj = { second: { third: 'finish' } }, arr, index = 0) {
	// if there is no element at the arr at index, return obj
  if (!arr[index]){
    return obj
  }
  // declare a new variable and assign its value to the value of the object's property the indexed value of array
  let newObj = obj[arr[index++]]
  return pathFinder(newObj = { third: 'finish' }, arr, index)
}

3.
function pathFinder(obj = { third: 'finish' }, arr, index = 0) {
	// if there is no element at the arr at index, return obj
  if (!arr[index]){
    return obj
  }
  // declare a new variable and assign its value to the value of the object's property the indexed value of array
  let newObj = obj[arr[index++]]
  return pathFinder(newObj = { third: 'finish' }, arr, index)
}

const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"
*/
