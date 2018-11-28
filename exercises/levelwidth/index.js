// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let result=[0]
  let array=[root,'s']
  while (array.length>1) {
    let first=array.shift()
    if (first==='s') {
      array.push('s')
      result.push(0)
    }else {
      array.push(...first.children)
      result[result.length-1]++
    }
  }
  return result
}

module.exports = levelWidth;
