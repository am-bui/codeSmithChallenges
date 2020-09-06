// Create a function saveOutput that accepts a function (that will accept one inputument),
// and a string (that will act as a password). saveOutput will then return a function
// that behaves exactly like the passed-in function, except for when the password string
// is passed in as an inputument. When this happens, the returned function will return an
// object with all previously passed-in inputuments as keys, and the corresponding outputs as values

function saveOutput(func, magicWord) {
  const object = {};

  function logObject(input) {
    if (input !== magicWord) {
      object[input] = func(input);
      return func(input);
    }
    return object;
  }
  return logObject;
}

const multiplyBy2 = function(num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

/* v2.

function saveOutput(func, magicWord) {
  const object = {};
  return function logObject(input) {
    if (typeof input === 'number') {
      object[input] = func(input);
      return func(input);
    }
    if (typeof input === 'string') {
      return object;
    }
  };
}
*/
