// Challenge 5

// In the first part of this challenge, you're going to rebuild map as mapWith. 
// This time you're going to use forEach inside of mapWith instead of using a for loop.



// declare a mapWith function that takes an array and a callback
// declare a variable called result and set it to an empty array
// instead of iterating with a for loop, invoke forEach
// forEach will take an array as the 1st param
// the 2nd param will be function that wraps the evaluation of the invocation of the callback on each element and pushes it into result
// return result

function mapWith(array, callback){
    const result = [];
    forEach(array, el => result.push(callback(el)))
    return result;
}


// declare a forEach function 
// forEach will take an array and a callback as params
// it will iterate through the array
// and run the callback on each element of the array

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}


let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof mapWith); // should log: 'function'
console.log(mapWith([3,4,5], n => n - 2)); // should log: [1, 2, 3]
