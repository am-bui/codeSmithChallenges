/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Create a function secretCipher that takes in an string(sentence) and an object(cipher).
// Return a string where every character is replaced with its cooresponding value in the cipher.
// If the character doesn't exist in the cipher, use the original character.

function secretCipher(sentence, cipher) {
  let newSentence = sentence;
  for (let i = 0; i < sentence.length; i += 1) {
    for (const key in cipher) {
      if (sentence[i] === key) {
        newSentence = newSentence.replace(sentence[i], cipher[key]);
      }
    }
  }
  return newSentence;
}

console.log(secretCipher('lqq me on flcebzzk', { l: 'a', q: 'd', z: 'o' })); //= > "add me on facebook"
console.log(secretCipher('where are you???', { v: 'l', '?': '!' })); //= > "where are you!!!"
console.log(secretCipher('twmce', { m: 'n', t: 'd', w: 'a' })); //= > "dance"
