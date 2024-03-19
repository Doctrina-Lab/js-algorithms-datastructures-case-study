/*
 * Implement a function called, `areThereDuplicates` which accepts a variable number of arguments, and checks 
 * whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter 
 * pattern OR the multiple pointers pattern.
 * Examples:
 *   areThereDuplicates(1, 2, 3) // false
 *   areThereDuplicates(1, 2, 2) // true 
 *   areThereDuplicates('a', 'b', 'c', 'a') // true 
 *
 * Restrictions:
 *   Time - O(n)
 *   Space - O(n)
 * Bonus:
 *   Time - O(n log n)
 *   Space - O(1)
 */

function areThereDuplicates(...args) {
    return areThereDuplicatesFrequencyCounterImpl(args)
}

function areThereDuplicatesFrequencyCounterImpl(args) {
    if (args.length === 0 || args.length === 1) { return false }

    let set = new Set()
    for (let item of args) {
        if (set.has(item)) { return true }
        set.add(item)
    }

    return false
}

// The solutions below works only if an array has elements of the same type

/*
function areThereDuplicatesOneLinerImpl(args) {
    return new Set(args).length !== args.length
}


function areThereDuplicatesMultiplePointersImpl(args) {
    if (args.length === 0 || args.length === 1) { return false }

    args.sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
      })
     
    let start = 0
    let next = 1
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++
        next++
    }
    return false
}
*/

module.exports = areThereDuplicates