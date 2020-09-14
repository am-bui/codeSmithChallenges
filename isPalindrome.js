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

note: 
A recursive function is one that solves a repetitive problem by calling itself. 
Each function invocation breaks the problem down to solve smaller pieces
of the same problem. The goal is to break the input down into the most
smallest possible solution to generate the result. 

Tail-call optimization is where you are able to avoid allocating 
a new stack frame for a function because the calling function will 
simply return the value that it gets from the called function.
*/

function isPalindrome(str) {
  // remove non-alphanumeric characters and
  // change the string to lowercase
  const characters = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
  // and get the length of the string
  const strLen = characters.length;
  // base case:
  if (strLen === 0 || strLen === 1) return true;
  if (characters[0] !== characters[strLen - 1]) return false;

  // proper tail call optimized recursion
  return isPalindrome(characters.slice(1, -1));
}

console.log(isPalindrome('Anne, I vote more cars race Rome-to-Vienna')); // -> true
console.log(isPalindrome('llama mall')); // -> true
console.log(isPalindrome('jmoney')); // -> false
