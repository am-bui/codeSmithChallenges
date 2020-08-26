/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
// Create a function goodKeys that accepts an object and a callback.
// The callback will return either true or false. goodKeys will iterate
// through the object and perform the callback on each value. goodKeys will
// then return an array consisting only the keys whose associated values
// yielded a true return value from the callback.

const sunny = {
  mac: 'priest',
  dennis: 'calculator',
  charlie: 'birdlaw',
  dee: 'bird',
  frank: 'warthog',
};

function goodKeys(obj, callback) {
  const array = [];
  for (const key in obj) {
    if (callback(obj[key])) {
      array.push(key);
    }
  }
  return array;
}

function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === 'bird';
}

console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
