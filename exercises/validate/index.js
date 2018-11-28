// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (!node) {
    return true
  }
  if ((max && node.data>max)||(min && node.data<min)) {
    //if  we already set max and current value is greater than the max
    // or we already set min and current value is less than the min
    // the return false
    return false
  }
  return validate(node.left,min,node.data)&&validate(node.right,node.data,max)
}

module.exports = validate;
