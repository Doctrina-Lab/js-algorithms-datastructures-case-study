function flatten(array) {
    if (array.length === 0) return []

    let firstItem
    if (Array.isArray(array[0])) {
        firstItem = flatten(array[0])
    } else {
        firstItem = [array[0]]
    }
    
    return firstItem.concat(flatten(array.slice(1)))
}

module.exports = flatten