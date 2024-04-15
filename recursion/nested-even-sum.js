function isEven(value) {
    return value % 2 === 0
}

function isObject(value) {
    return typeof value === 'object' && value !== null
}

function nestedEvenSum(obj) {
    if (isEven(obj)) { return obj }
    if (!isObject(obj)) { return 0 }

    let sum = 0
    for (const value of Object.values(obj)) {
        sum += nestedEvenSum(value)
    }
    return sum
}

module.exports = nestedEvenSum