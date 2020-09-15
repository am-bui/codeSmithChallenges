function getLength(string, index = 0) {
  if (!string[index]) {
    return index;
  }
  const incIndex = index + 1;
  return getLength(string, incIndex);
}

console.log(getLength('hello')); // -> 5
