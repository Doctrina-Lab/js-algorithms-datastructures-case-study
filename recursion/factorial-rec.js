function factorialRec(num) {
    // TODO: throw an error in case num in not a number or it is a negative
    if (num === 1 || num === 0) { return 1 }
    return num * factorialRec(num - 1)
}

module.exports = factorialRec