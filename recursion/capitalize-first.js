function capitalizeFirst(arr) {
    if (arr.length === 0) return []
    let firstWord = arr[0]
    let capitalizedFirstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
    return [capitalizedFirstWord].concat(capitalizeFirst(arr.slice(1)))
}

module.exports = capitalizeFirst