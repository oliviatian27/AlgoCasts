// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowel={'a':0,'e':0,'i':0,'o':0,'u':0}
  let counter=0
  for (character of str.toLowerCase()) {
    if (vowel[character]===0) {
      counter++
    }
  }
  return counter
}

function vowels(str) {
  const vowel=['a','e','i', 'o','u']
  let counter=0
  for (character of str.toLowerCase()) {
    if (vowel.indexOf(character)!=-1) {
      counter++
    }
  }
  return counter
}


module.exports = vowels;
