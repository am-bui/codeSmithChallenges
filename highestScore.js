/* eslint-disable no-restricted-syntax */
// Create a function highestScore that takes in an array of student objects as a parameter.
// It should return a string that corresponds to the student with the highest score.
// The string should contain that student's splitName concatenated with their id.
// Assume the array contains at least 1 student object and the student with the highest score is unique (there are no ties).

function highestScore(studentObj) {
  let highScore = studentObj[0].score;
  let student;
  for (let i = 1; i < studentObj.length; i += 1) {
    if (studentObj[i].score > highScore) {
      highScore = studentObj[i].score;
      const splitName = studentObj[i].name.split(' ');
      const initials = splitName[0][0] + splitName[1][0];
      student = initials + studentObj[i].id;
    }
  }
  return student;
}

const students = [
  { name: 'Will Sentance', id: 128, score: -42 },
  { name: 'Jamie Bradshaw', id: 32, score: 57 },
  { name: 'Lisa Simpson', id: 2, score: 99 },
  { name: 'Luke Skywalker', id: 256, score: 94 },
];

console.log(highestScore(students)); //= > 'LS2'
