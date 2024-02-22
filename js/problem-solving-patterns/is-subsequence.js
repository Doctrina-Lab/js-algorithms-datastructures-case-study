// Write a function called isSubsequence which takes in two strings and checks 
// whether the characters in the first string form a subsequence of the characters 
// in the second string. In other words, the function should check whether 
// the characters in the first string appear somewhere in the second string, 
// without their order changing.

// Examples:
//     isSubsequence('hello', 'hello world'); // true
//     isSubsequence('sing', 'sting'); // true
//     isSubsequence('abc', 'abracadabra'); // true
//     isSubsequence('abc', 'acb'); // false (order matters)

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    if (str1 === str2) { return true }
    if (str1.length > str2.length) { return false }
    
    let str1It = 0
    for (let str2It = str1It; str1It < str1.length && str2It < str2.length;) {
        if (str1[str1It] === str2[str2It]) {
            ++str1It
            ++str2It
        } else {
            ++str2It
        }
    }

    return str1It === str1.length
}

module.exports = isSubsequence