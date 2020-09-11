// Create a function censor that accepts no arguments. censor will return a function that
// will accept either two strings, or one string. When two strings are given, the returned
// function will hold onto the two strings as a pair, for future use. When one string is given,
// the returned function will return the same string, except all instances of a first string
// (of a saved pair) will be replaced with the second string (of a saved pair).

function censor() {
  const obj = {};
  function storeOrReplace(string1, string2) {
    if (string2) {
      obj[string1] = string2;
      return;
    }
    let sentence = string1;
    Object.keys(obj).forEach(
      key => (sentence = sentence.replace(key, obj[key]))
    );
    return sentence;
  }
  return storeOrReplace;
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.'));
// should log: 'The slow, brown fox jumps over the lazy cats.'

// function censor() {
//   const string1 = [];
//   const string2 = [];
//   function replace(str1, str2) {
//     if (str2) {
//       string1.push(str1);
//       string2.push(str2);
//     } else {
//       let sentence = str1;
//       for (let i = 0; i < string1.length; i += 1) {
//         for (; i < string2.length; i += 1) {
//           sentence = sentence.replace(string1[i], string2[i]);
//         }
//         return sentence;
//       }
//     }
//   }
//   return replace;
// }

// function censor() {
//   const object = {}
//   function storeOrReplace(string1, string2){
//     if (string2){
//       object[string1] = string2
//     } else {
//       if (!string1.includes(Object.values(object))){
//       	for (let i = 0; i < Object.keys(object).length; i++){
//           for (; i < Object.values(object).length; i++ ){
//             string1 = string1.replace(Object.keys(object)[i], Object.values(object)[i])
//           }
//         }
//        return string1
//       }
//     }
//   }
//   return storeOrReplace
// }
