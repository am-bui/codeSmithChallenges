// Thinking about our base case first — we want recursion to stop when our string has run out of letters.
// To reverse the string, the first letter of the argument will be plucked out of the string each call.
// Next, we want to add the all the letters taken out when our recursive function halts.

function reverseString(string) {
  if (string === '') {
    return '';
  }
  return reverseString(string.substr(1)) + string.charAt(0);
}

console.log(reverseString('hello'));

/*
Each recursive call will look like this:

recursionReverse('hello')
(recursionReverse('ello') + 'h')
((recursionReverse('llo') + 'e') + 'h')
(((recursionReverse('lo') + 'l') + 'e') + 'h')
((((recursionReverse('o') + 'l') + 'l' ) + 'e') + 'h')
(((('o') + 'l') + 'l' ) + 'e') + 'h')

base case string has no more letters to pluck out

return 'olleh'
*/
