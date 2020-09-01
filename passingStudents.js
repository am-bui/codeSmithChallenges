// Create a function passingStudents that accepts an array of student objects.
// It should iterate through the list of students and return an array of the
// names of all the students who have an average grade of at least 70.

const students = [
  {
    name: 'Marco',
    id: 12345,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 75 },
      { id: 2, score: 85 },
    ],
  },
  {
    name: 'Donna',
    id: 55555,
    grades: [
      { id: 0, score: 100 },
      { id: 1, score: 100 },
      { id: 2, score: 100 },
    ],
  },
  {
    name: 'Jukay',
    id: 94110,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 60 },
      { id: 2, score: 65 },
    ],
  },
];

function passingStudents(classArray) {
  const passArray = [];
  let average;
  for (let i = 0; i < classArray.length; i += 1) {
    const gradeArray = classArray[i].grades;
    let totalScore = 0;
    let scoreCount = 0;
    for (let j = 0; j < gradeArray.length; j += 1) {
      scoreCount += 1;
      totalScore += gradeArray[j].score;
      average = totalScore / scoreCount;
    }
    if (average >= 70) {
      passArray.push(classArray[i].name);
    }
  }
  return passArray;
}

console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]
