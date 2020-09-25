function isEven(n) {
  // we know that it is even if when divided by two has no remainder
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }

  return isEven(n - 2);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(isEven(0)); // -> true
console.log(isEven(5)); // -> false
console.log(isEven(10)); // -> true
