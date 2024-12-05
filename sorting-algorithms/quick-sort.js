function pivot(arr, startIndex = 0, endIndex = arr.length) {
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  if (arr.length == 0) return -1
  if (arr.length == 1) return 0

  let pivot = arr[startIndex]
  let storeIndex = startIndex
  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i] < pivot) {
      storeIndex++
      swap(arr, storeIndex, i)
    }
  }

  swap(arr, storeIndex, startIndex)
  return storeIndex 
}

function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  if (endIndex <= startIndex) return arr
  let pivotIndex = pivot(arr, startIndex, endIndex)
  quickSort(arr, startIndex, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, endIndex)
  return arr
}

module.exports = { pivot, quickSort }
