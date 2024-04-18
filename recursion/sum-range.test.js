const sumRange = require('./sum-range')

describe('sumRange', () => {
    it('returns 0 for 0', () => {
        expect(sumRange(0)).toEqual(0)
    })
    it('returns 1 for 1', () => {
        expect(sumRange(1)).toEqual(1)
    })
    it('returns 3 for 2', () => {
        expect(sumRange(2)).toEqual(3)
    })
    it('returns 6 for 3', () => {
        expect(sumRange(3)).toEqual(6)
    })
    it('returns 10 for 4', () => {
        expect(sumRange(4)).toEqual(10)
    })
    it('returns 55 for 10', () => {
        expect(sumRange(10)).toEqual(55)
    })
})