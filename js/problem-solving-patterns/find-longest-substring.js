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

/*
    function findLongestSubstring(str) {
      let longest = 0;
      let seen = {};
      let start = 0;
     
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
          start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
      }
      return longest;
    }
*/

module.exports = findLongestSubstring