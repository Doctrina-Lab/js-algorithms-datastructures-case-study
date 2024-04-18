function productOfArray(arr) {
    if (arr.length === 0) return 1

    function productOfArrayHelper(index, endIndex) {
        if (index === endIndex) return arr[index]
        return arr[index] * productOfArrayHelper(index + 1, endIndex)
    }

    return productOfArrayHelper(0, arr.length - 1)
}

module.exports = productOfArray