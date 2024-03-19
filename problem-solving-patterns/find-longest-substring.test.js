const findLongestSubstring = require('./find-longest-substring')

describe('findLongestSubstring', () => {
    it('returns 0 for empty input string', () => {
        expect(findLongestSubstring('')).toEqual(0)
    })
    it('returns 1 for input string with single character', () => {
        expect(findLongestSubstring('a')).toEqual(1)
    })
    it('returns 7 for (rithmschool)', () => {
        expect(findLongestSubstring('rithmschool')).toEqual(7)
    })
    it('returns 6 for (thisisawesome)', () => {
        expect(findLongestSubstring('thisisawesome')).toEqual(6)
    })
    it('returns 7 for (thecatinthehat)', () => {
        expect(findLongestSubstring('thecatinthehat')).toEqual(7)
    })
    it('returns 1 for (bbbbbb)', () => {
        expect(findLongestSubstring('bbbbbb')).toEqual(1)
    })
    it('returns 8 for (longestsubstring)', () => {
        expect(findLongestSubstring('longestsubstring')).toEqual(8)
    })
    it('returns 6 for (thisishowwedoit)', () => {
        expect(findLongestSubstring('thisishowwedoit')).toEqual(6)
    })
})