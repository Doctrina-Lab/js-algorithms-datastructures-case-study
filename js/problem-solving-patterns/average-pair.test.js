const averagePair = require('./average-pair')

describe('averagePair', () => {
    it('returns false for empty input array', () => {
        expect(averagePair([], 4)).toEqual(false)
    })
    it('returns false for single-element input array', () => {
        expect(averagePair([4], 4)).toEqual(false)
    })
    it('returns true for ([1, 2, 3], 2.5)', () => {
        expect(averagePair([1, 2, 3], 2.5)).toEqual(true)
    })
    it('returns false for ([-1,0,3,4,5,6], 4.1)', () => {
        expect(averagePair([-1,0,3,4,5,6], 4.1)).toEqual(false)
    })
})