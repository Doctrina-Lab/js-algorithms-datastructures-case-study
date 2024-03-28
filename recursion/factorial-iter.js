function factorialIter(num) {
    // TODO: throw an error in case num in not a number or it is a negative
    let factorial = 1
    for (let i = num; i > 1; i--) {
        factorial *= i
    }
    return factorial
}

module.exports = factorialIter