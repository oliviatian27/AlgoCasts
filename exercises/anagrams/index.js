// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  const objA=buildMapChar(stringA)
  const objB=buildMapChar(stringB)
  for (var char in objA) {
    if (Object.keys(objA).length!=Object.keys(objB).length||objA[char]!=objB[char]) {
      return false
    }
  }
  return true
}

function buildMapChar(str){
  const newStr=str.replace(/\W/g,'')
  const obj={}
  for (character of newStr) {
    obj[character]=obj[character]+1||1
  }
  return obj
}

module.exports = anagrams;
