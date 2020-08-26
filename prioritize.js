// Create a function prioritize that accepts an array and a callback. 
// The callback will return either true or false. 
// prioritize will iterate through the array and perform the callback 
// on each element, and return a new array, where all the elements 
// that yielded a return value of true come first in the array, 
// and the rest of the elements come second.

// input: array
// output: new array

// declare a function that accepts an array and a callback
function prioritize(array, callback){
// declare a new variable containing an empty array
    const newArr = [];
    const nonS = [];
// iterate through the array
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        // run the callback on each element of the arary
        callback(element)
        // console.log(callback(element))
        // control flow
        if (callback(element) === true) {
            newArr.push(element) 
        } else {
            nonS.push(element)
        }
        // exit loop
    }
 // each element that returned true comes first in the array, the rest second
return newArr.concat(nonS)
}

const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };

console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']