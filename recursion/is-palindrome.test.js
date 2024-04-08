const isPalindrome = require('./is-palindrome')

describe('isPalindrome returns true', () => {
    it('returns true for mom', () => {
        expect(isPalindrome('mom')).toEqual(true)
    })
    it('returns true for tacocat', () => {
        expect(isPalindrome('tacocat')).toEqual(true)
    })
    it('returns true for amanaplanacanalpanama', () => {
        expect(isPalindrome('amanaplanacanalpanama')).toEqual(true)
    })
})

describe('isPalindrome returns false', () => {
    it('returns false for awesome', () => {
        expect(isPalindrome('awesome')).toEqual(false)
    })
    it('returns false for foobar', () => {
        expect(isPalindrome('foobar')).toEqual(false)
    })
    it('returns false for amanaplanacanalpandemonium', () => {
        expect(isPalindrome('amanaplanacanalpandemonium')).toEqual(false)
    })
})