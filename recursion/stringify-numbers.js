// Write a function called "stringifyNumbers" which takes in an object
// and finds all of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings,
// and not modify the original. Keep the original object unchanged.

let original = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function isNumber(value) {
    return typeof value === 'number'
}

function isObject(value) {
    return typeof value === 'object'
}

function isArray(value) {
    return Array.isArray(value)
}

function stringifyNumbers(obj) {
    if (isNumber(obj)) return `${obj}`

    if (isArray(obj)) {
        let res = []
        for (const value of obj) {
            res.push(stringifyNumbers(value))
        }
        return res
    }

    if (isObject(obj)) {
        let res = {}
        for (const [key, value] of Object.entries(obj)) {
            res[key] = stringifyNumbers(value)
        }
        return res    
    }

    return obj
}

module.exports = stringifyNumbers