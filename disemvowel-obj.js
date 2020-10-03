/*
Declare a variable 'vowels' and assign it to an object containing key/value pairs. 
Each pair will be a vowel as key and true as value. 
*/
// declare variable assigned to object
const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  A: true,
  E: true,
  I: true,
  O: true,
  U: true,
};

/* 
Write a function disemvowel that takes in a string and returns a new string with all vowels removed. 
1. Create one testcase with a string that has multiple lowercase and uppercase characters
2. Create one testcase with a string that is completely capitalized
3. Create one testcase with 2 words
*/

function disemvowel(string) {
  const newString = [];
  // iterate through string, checking each index of string
  for (let i = 0; i < string.length; i += 1) {
    // check if string has vowels
    if (!Object.keys(vowels).includes(string[i])) {
      // if so, remove vowels
      newString.push(string[i]);
    }
  }
  // return string w/ no vowels
  return newString.join('');
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
