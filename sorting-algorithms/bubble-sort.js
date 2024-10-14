function bubbleSort(arr) {
    for (let last = arr.length - 1; last > 0; last--) {
        for (let current = 0; current < last; current++) {
            if (arr[current] > arr[current + 1]) {
                let temp = arr[current]
                arr[current] = arr[current + 1]
                arr[current + 1] = temp
            }
        }
    }
    return arr
}

module.exports = bubbleSort