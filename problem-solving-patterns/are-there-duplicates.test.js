const areThereDuplicates = require('./are-there-duplicates')

describe('areThereDuplicates', () => {
    it('returns false for empty list of arguments', () => {
        expect(areThereDuplicates()).toEqual(false)
    })
    it('returns false for list with one argument', () => {
        expect(areThereDuplicates(1)).toEqual(false)
    })
    it('returns false for (1, 2, 3)', () => {
        expect(areThereDuplicates(1, 2, 3)).toEqual(false)
    })
    it('returns true for (1, 2, 2)', () => {
        expect(areThereDuplicates(1, 2, 2)).toEqual(true)
    })
    it('returns true for (a, b, c, a)', () => {
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toEqual(true)
    })
    it('returns true for (1, Char(1), 1)', () => {
        expect(areThereDuplicates(1, '1', 1)).toEqual(true)
    })
    it('returns false for (Char(1), 1)', () => {
        expect(areThereDuplicates('1', 1)).toEqual(false)
    })
})