/* eslint-disable no-plusplus */
// Create a function cycleIterator that accepts an array, and returns a function.
// The returned function will accept zero arguments. When first invoked, the returned
// function will return the first element of the array. When invoked a second time,
// the returned function will return the second element of the array, and so forth.
// After returning the last element of the array, the next invocation will return the
// first element of the array again, and continue on with the second after that, and so forth.

function cycleIterator(array) {
  let index = 0;
  function days() {
    const result = array[index++];
    if (index >= array.length) {
      index = 0;
    }
    return result;
  }
  return days;
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

// function cycleIterator(array) {
//   let index = 0;
//   function days() {
//     for (let i = index; i < array.length; i += 1) {
//       index++;
//       if (index >= array.length) {
//         index = 0;
//       }
//       return array[i];
//     }
//   }
//   return days;
// }
