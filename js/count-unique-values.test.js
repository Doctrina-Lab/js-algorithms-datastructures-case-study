const countUniqueValues = require("./count-unique-values")

describe('countUniqueValues', () => {
    it('returns 0 for empty array', () => {
        expect(countUniqueValues([])).toEqual(0)
    })
    it('returns 1 for [1]', () => {
        expect(countUniqueValues([1])).toEqual(1)
    })
    it('returns 2 for [1, 2]', () => {
        expect(countUniqueValues([1, 2])).toEqual(2)
    })
    it('returns 2 for [1, 1, 2]', () => {
        expect(countUniqueValues([1, 1, 2])).toEqual(2)
    })
    it('returns 2 for [1, 1, 1, 1, 1, 2]', () => {
        expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2)
    })
    it('returns 7 for [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]', () => {
        expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7)
    })
    it('returns 4 for [-2, -1, -1, 0, 1]', () => {
        expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4)
    })
})