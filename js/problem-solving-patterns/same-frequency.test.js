const sameFrequency = require('./same-frequency')

describe('sameFrequency', () => {
    it('returns true for equal numbers', () => {
        expect(sameFrequency(3, 3)).toEqual(true)
    })
    it('returns true for (182, 281)', () => {
        expect(sameFrequency(182, 281)).toEqual(true)
    })
    it('returns false for (34, 14)', () => {
        expect(sameFrequency(34, 14)).toEqual(false)
    })
    it('returns true for (3589578, 5879385)', () => {
        expect(sameFrequency(3589578, 5879385)).toEqual(true)
    })
    it('returns false for (22, 222)', () => {
        expect(sameFrequency(22, 222)).toEqual(false)
    })
})