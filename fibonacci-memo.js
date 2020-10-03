function createFib() {
  const memo = {};

  function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) return memo[n];

    const fibn = fib(n - 1) + fib(n - 2);
    memo[n] = fibn;
    return fibn;
  }
  return fib;
}

const fibonacci = createFib();

console.log(fibonacci(0)); // -> 0
console.log(fibonacci(5)); // -> 5
console.log(fibonacci(37)); // -> 24157817

// console.log(fibonacci(45));
