// Construct a function intersection that compares input arrays 
// and returns a new array with elements found in all of the inputs. 
// BONUS: Use reduce!

// input: array of arrays
// output: new array with elements found in all inputs

// declare a function called intersection that takes an array of arrays
// declare a function called reduce
// reduce will have an array, a callback, and an initial value as params
// declare a variable called accumulator and assign it the value of the initial value
// iterate through the array
// declare a variable that stores the current element
// reassign accumulator to the evaluation of invoking the callback with the accumulator and current element as arguments
// return accumulator
// declare a function called filter that compares 2 arrays
// initialize a new array and set to an empty array
// iterate through the array
// check if the current element of the first array is included in the second array
// if not, increment i and check condition again
// if so, push this element into the new array
// return new array
// return reduce(array, callback, initialValue)

function intersection(...arrayOfArrays){

    function reduce(array, callback, initialValue){
        let accumulator = initialValue; 
        for (let i = 1; i < array.length; i++){ 
            const current = array[i];
            accumulator = callback(accumulator, current)
        } 
        return accumulator
    }

    function filter(array1, array2){
        const newArray = [];
        for (let i = 0; i < array1.length; i++){
            const element = array1[i] 
            if (array2.includes(element)) {
                newArray.push(element)
            }
        }
        return newArray
    }

    return reduce(arrayOfArrays, filter, arrayOfArrays[0])
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])); // should log: [5, 15]

// function intersection(arrayOfArrays){}
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
