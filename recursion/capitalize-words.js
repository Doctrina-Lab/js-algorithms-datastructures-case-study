// Write a recursive function called "capitalizeWords". 
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
    if (arr.length === 0) return []
    let firstWordCapitalized = arr[0].toUpperCase()
    return [firstWordCapitalized].concat(capitalizeWords(arr.slice(1)))
}

module.exports = capitalizeWords