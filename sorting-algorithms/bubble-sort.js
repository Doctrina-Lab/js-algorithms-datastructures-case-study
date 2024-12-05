function bubbleSort(arr) {
    let noSwaps
    for (let last = arr.length - 1; last > 0; last--) {
        noSwaps = true
        for (let current = 0; current < last; current++) {
            if (arr[current] > arr[current + 1]) {
                let temp = arr[current]
                arr[current] = arr[current + 1]
                arr[current + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

module.exports = bubbleSort