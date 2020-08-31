// Create a function objectBuilder that takes in a number and returns an object
// whose keys are 0 up to number and the values are that same number multipled by 5.

function objectBuilder(count) {
  const obj = {};
  for (let i = 0; i <= count; i += 1) {
    obj[i] = i * 5;
  }
  return obj;
}

console.log(objectBuilder(4)); //= >
// {
// 0: 0,
// 1: 5,
// 2: 10,
// 3: 15,
// 4: 20,
// }
console.log(objectBuilder(0)); //= > { 0: 0 }
