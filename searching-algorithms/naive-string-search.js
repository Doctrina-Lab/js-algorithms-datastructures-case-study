function naiveStringSearch(string, substring) {
    let count  = 0

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < substring.length; j++) {
            if (substring[j] !== string[i + j]) break
            if (j === substring.length - 1) count++
        }
    }

    return count
}

module.exports = naiveStringSearch