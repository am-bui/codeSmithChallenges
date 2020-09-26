/* eslint-disable no-plusplus */
/*
Create a function 'addNumbers' that takes a number as an argument. 
'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

function addNumbers(num) {
  let acc = 0;
  for (let i = 0; i <= num; i++) {
    acc += i;
  }
  return acc;
}

console.log(addNumbers(4)); // expect 10
