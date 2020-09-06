// Create a function russianRoulette that accepts a number (let us call it n),
// and returns a function. The returned function will take no arguments, and
// will return the string 'click' the first n - 1 number of times it is invoked.
// On the very next invocation (the nth invocation), the returned function will
// return the string 'bang'. On every invocation after that, the returned
// function returns the string 'reload to play again'.

function russianRoulette(n) {
  let counter = 0;
  function closureFn() {
    counter += 1;
    if (counter < n) {
      return 'click';
    }
    if (counter === n) {
      return 'bang';
    }
    return 'reload to play again';
  }
  return closureFn;
}

const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'
