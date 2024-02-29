// Write a function called findLongestSubstring, which accepts a string and returns 
// the length of the longest substring with all distinct characters.

//     findLongestSubstring('') // 0
//     findLongestSubstring('rithmschool') // 7
//     findLongestSubstring('thisisawesome') // 6
//     findLongestSubstring('thecatinthehat') // 7
//     findLongestSubstring('bbbbbb') // 1
//     findLongestSubstring('longestsubstring') // 8
//     findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

function findLongestSubstring(str) {
    if (str.length <= 1) { return str.length }

    let substringLength = 0
    
    for (let start = 0, end = 1; end < str.length; end++, substringLength = Math.max(substringLength, end - start)) {
        if (str.substring(start, end).includes(str[end])) {
            start = str.substring(0, end).lastIndexOf(str[end]) + 1
        }
    }

    return substringLength
}

module.exports = findLongestSubstring