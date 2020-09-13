// Write a recursive function palindrome that accepts a string as an
// input and returns true if that string is a palindrome (the string
// is the same forward and backwards). The input string may have
// punctuation and symbols, but that should not affect whether the
// string is a palindrome.

// how do we manipulate the string to make it easier to compare?
// get rid of spaces, punctuation, and symbols
// do not directly manipulate string parameter
// declare a variable and assign value of string

// create a placeholder to be the decremented index from the end of the string,
// do not directly manipluate parameter
// create new variable and assign it the value lastIndex
// reassign endIndex to the characters' last index

// how to tell if it is not a palindrome?
// we check each character index by index from both sides of the string,
// if at any point the characters at the current index do not match,
// return false / 'not a plaindrome'

// how to tell if it is a palindrome?
// if moving towards the middle of the string from both sides, index by index,
// the characters at the current index continue to match

// how to know we've reach the middle of the string?
// if the string has an even number of letters then it will divide evenly in half
// what happens if there's an odd number of letters?
// check to see if all the letters match up till the last letter remains
// if odd,
// string.length - add up index from beg, with index from end === to 1
// return true

function palindrome(string, begIndex = 0, lastIndex) {
  const characters = string.toLowerCase().replace(/[^a-z0-9+]+/gi, '');

  let endIndex = lastIndex;
  endIndex = characters.length - 1;

  if (characters[begIndex] !== characters[endIndex]) {
    return 'false: not a palindrome';
  }

  if (characters.length % 2 === 0) {
    if (begIndex === characters.length / 2) {
      return true;
    }
  } else {
    return true;
  }

  return palindrome(characters, begIndex + 1, endIndex - 1);
}

console.log(palindrome('Anne, I vote more cars race Rome-to-Vienna')); // -> true
console.log(palindrome('llama mall')); // -> true
console.log(palindrome('jmoney')); // -> false
