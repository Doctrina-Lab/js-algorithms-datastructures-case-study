function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) return true
    if (str[0] != str.slice(-1)) return false
    return isPalindrome(str.substring(1, str.length-1))
}

module.exports = isPalindrome