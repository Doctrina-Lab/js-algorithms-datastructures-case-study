/*
 * Write a function called `sameFrequency`.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 * 
 * Sample Input:
 *   sameFrequency(182,281) // true
 *   sameFrequency(34,14) // false
 *   sameFrequency(3589578, 5879385) // true
 *   sameFrequency(22,222) // false
 */

function sameFrequency(first, second) {
    if (first === second) { return true }

    let firstFrequencyCounter = {}
    let secondFrequencyCounter = {}

    while (first !== 0) {
        let digit = first % 10
        firstFrequencyCounter[digit] = (firstFrequencyCounter[digit] || 0) + 1
        first = Math.floor(first / 10)
    }

    while (second !== 0) {
        let digit = second % 10
        secondFrequencyCounter[digit] = (secondFrequencyCounter[digit] || 0) + 1
        second = Math.floor(second / 10)
    }

    if (Object.keys(firstFrequencyCounter).length !== Object.keys(secondFrequencyCounter).length) {
        return false
    }

    for (let key in firstFrequencyCounter) {
        if (!secondFrequencyCounter[key]) {
            return false
        }
        if (firstFrequencyCounter[key] !== secondFrequencyCounter[key]) {
            return false
        }
    }
    return true
}

module.exports = sameFrequency