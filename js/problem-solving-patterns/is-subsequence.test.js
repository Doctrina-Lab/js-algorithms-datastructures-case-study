const isSubsequence = require('./is-subsequence')

describe('isSubsequence', () => {
    it('returns true for equal input strings', () => {
        expect(isSubsequence('string', 'string')).toEqual(true)
    })
    it('returns false if second input string is less than first', () => {
        expect(isSubsequence('string', 'strin')).toEqual(false)
    })
    it('returns true for (hello, hello world)', () => {
        expect(isSubsequence('hello', 'hello world')).toEqual(true)
    })
    it('returns true for (sing, sting)', () => {
        expect(isSubsequence('sing', 'sting')).toEqual(true)
    })
    it('returns true for (abc, abracadabra)', () => {
        expect(isSubsequence('abc', 'abracadabra')).toEqual(true)
    })
    it('returns false for (abc, acb)', () => {
        expect(isSubsequence('abc', 'acb')).toEqual(false)
    })
})