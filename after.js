// Write a function after that takes the number of times the callback needs to be
// called before being executed as the first parameter and the callback as the second parameter.

function after(times, callback) {
  let count = 0;
  return function executeWhen(...args) {
    count += 1;
    if (count >= times) {
      return callback(...args);
    }
    return undefined;
  };
}

const called = function(string) {
  return `hello ${string}`;
};
const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world'));
console.log(afterCalled('world'));
