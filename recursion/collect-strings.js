// Write a function called "collectStrings" which accepts an object 
// and returns an array of all the values in the object that have a typeof string

function isString(value) {
    return typeof value === 'string'
}

function isObject(value) {
    return typeof value === 'object'
}

function collectStrings(obj) {
    if (isString(obj)) return [obj]
    if (!isObject(obj)) return []

    let arr = []
    for (const value of Object.values(obj)) {
        arr = arr.concat(collectStrings(value))
    }
    return arr
}

module.exports = collectStrings