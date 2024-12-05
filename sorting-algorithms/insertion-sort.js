function insertionSort(arr) {
  if (arr.length < 2) return arr
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j = i - 1
    for (; j >= 0 && currentValue < arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}

module.exports = insertionSort
