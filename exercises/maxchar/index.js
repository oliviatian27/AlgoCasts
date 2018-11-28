// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash={}
  let max=0
  let maxChar
  for (let character of str) {
    if (hash[character]) {
      hash[character]+=1
    }else {
      hash[character]=1
    }
    if (hash[character]>max) {
      max=hash[character]
      maxChar=character
    }
  }
  return maxChar
}

module.exports = maxChar;
