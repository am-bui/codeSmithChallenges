function repeater(char, n = 5, string = '') {
  if (n === 0) {
    return string;
  }
  string += char;
  n--;
  return repeater(char, n, string);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g')); // -> 'ggggg'
console.log(repeater('j')); // -> 'jjjjj'
