// Create a function addByX that returns a function that will add an input by x.

function addByX(input) {
  function addX(x) {
    return input + x;
  }
  return addX;
}

const addByTwo = addByX(2);
addByTwo(1); // should return 3
addByTwo(2); // should return 4
addByTwo(3); // should return 5

const addByThree = addByX(3);
addByThree(1); // should return 4
addByThree(2); // should return 5

const addByFour = addByX(4);
addByFour(4); // should return 8
addByFour(10); // should return 14
