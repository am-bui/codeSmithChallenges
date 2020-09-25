// A recursive function solves repetitive problems by calling itself.
// With each recursive call, the function breaks down the input into
// the smallest possible solution to give us the result we want.
// the Structure in implementing recursion:
// BASE CASE: is the simplest, smallest instance of the problem, that can’t be decomposed any further.
// RECURSIVE STEP: transforms the problem into something smaller, that gets us closer to base case

/*
I want to recursively call the function, each time with a substring
of the original string (which is without the first and last characters).
This continues to happen until there is either one character/ no character left.
With each invocation, I'll check to see if the first and last character matches.
If it matches until we reach the base case, then it'll be a palindrome.
*/

// declare a function "..." that accepts a string
// declare a variable to store the normalized string (lowercased)
// declare a variable to store string's length
// base case: if string's length is either 0 or 1, return true
// if the char at 0th index does not match char at last index, return false
// recursively call the function with the a shallow copy of the string
// without its first and last character using slice

function isPalindrome(str) {
  const characters = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
  const strLen = characters.length;
  if (strLen === 0 || strLen === 1) return true;
  if (characters[0] !== characters[strLen - 1]) return false;
  return isPalindrome(characters.slice(1, -1));
}

console.log(isPalindrome('Anne, I vote more cars race Rome-to-Vienna')); // -> true
console.log(isPalindrome('llama mall')); // -> true
console.log(isPalindrome('jmoney')); // -> false

/* Terminal conditions
For our recursive solution, we can identify two base cases that 
can cause the recursion to stop and return a result immediately:

First, we know that the string should be considered a palindrome if it 
contains just one character. Hence, a reasonable base case would 
be when the string length is less than or equal to 1 (<=1), for which we return true.

Second, we know that if the first and last characters do not match for a start, 
the string cannot be considered a palindrome. Hence, the recursion should be 
terminated and false should be returned from the function.

Basic implementation
For a basic implementation of our recursive solution, the following steps are 
executed in order when the function is invoked with a given string:

1. Replace the value of the string with its normalized form
2. Store the length of the string (needed for the base case)
3. Check if any of the base cases are met by the string; if so, 
return from the function with the appropriate result
4. If none of the conditions were met in step no. 3 above, call the function 
again with a substring of the original string as argument 
(without the first and last characters) — and the cycle continues

Tail-call optimization is where you are able to avoid allocating 
a new stack frame for a function because the calling function will 
simply return the value that it gets from the called function.
*/
