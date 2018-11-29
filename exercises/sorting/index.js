// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length-i; j++) {
      if (array[j]>array[j+1]) {
        let big=array[j]
        array[j]=array[j+1]
        array[j+1]=big
      }
    }
  }
  return array

}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let indexOfMin=i
    for (var j=i+1; j < arr.length; j++) {
      if (arr[j]<arr[indexOfMin]) {
        indexOfMin=j
      }
    }
    if (indexOfMin!==i) {
      let small=arr[indexOfMin]
      arr[indexOfMin]=arr[i]
      arr[i]=small
    }
  }
  return arr

}

function mergeSort(arr) {
  let middle=Math.floor(arr.length/2)
  let left=arr.slice(0,middle)
  let right=arr.slice(middle)
  if (arr.length===1) {
    return arr
  }
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right) {
  let result=[]
  while (left.length&&right.length) {
    if (left[0]<right[0]) {
      result.push(left.shift())
    }else {
      result.push(right.shift())
    }
  }
  return [...result,...left,...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort,merge };
