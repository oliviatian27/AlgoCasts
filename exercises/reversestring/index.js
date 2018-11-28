// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newstring=''
  for (var i = str.length-1; i >=0; i--) {
    newstring+=str[i]
  }
  return newstring
}
reverse('abd')

module.exports = reverse;
