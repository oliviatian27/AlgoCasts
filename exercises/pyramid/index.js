// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n){
  const column=n*2-1
  for (var i = 0; i < n; i++) {
    let str=''
    for (var j = 0; j < column; j++) {
      if (j<(Math.floor(column/2)-i)||j>(Math.floor(column/2)+i)) {
        str+=' '
      }else {
        str+='#'
      }
    }
    console.log(str);
  }
}

module.exports = pyramid;

// function pyramid(n) {
//     for (var i = 1; i <= n; i++) {
//       const len=n*2-1
//       const poundLength=i*2-1
//       const str=' '.repeat((len-poundLength)/2)+'#'.repeat(poundLength)+' '.repeat((len-poundLength)/2)
//       console.log(str);
//     }
// }
