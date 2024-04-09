function someRecursive(arr, predicate) {
    if (arr.length === 0) return false
    if (predicate(arr[0])) return true
    return someRecursive(arr.slice(1), predicate)
}

module.exports = someRecursive