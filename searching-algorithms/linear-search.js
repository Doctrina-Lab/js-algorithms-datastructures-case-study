function linearSearch(array, value) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === value) {
            return index
        }
    }

    return -1
}

module.exports = linearSearch