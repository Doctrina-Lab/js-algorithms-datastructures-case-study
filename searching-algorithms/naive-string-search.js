function naiveStringSearch(string, substring) {
    let count = 0

    for (let i = 0; i < string.length; i++) {
        let j = 0
        while (j < substring.length && i < string.length) {
            if (string[i] !== substring[j]) break
            if (string[i] === substring[j]) {
                if (j === substring.length - 1) count++
                i++
                j++
            }
        }
    }

    return count
}

module.exports = naiveStringSearch