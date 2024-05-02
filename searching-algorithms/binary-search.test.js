const binarySearch = require('./binary-search')

describe('binarySearch', () => {
    it('returns -1 for ([], 2)', () => {
        expect(binarySearch([], 2)).toEqual(-1)
    })

    it('returns -1 for ([1], 2)', () => {
        expect(binarySearch([1], 2)).toEqual(-1)
    })

    it('returns 0 for ([2], 2)', () => {
        expect(binarySearch([2], 2)).toEqual(0)
    })

    it('returns 0 for ([1, 2], 1)', () => {
        expect(binarySearch([1, 2], 1)).toEqual(0)
    })

    it('returns 1 for ([1, 2], 2)', () => {
        expect(binarySearch([1, 2], 2)).toEqual(1)
    })

    it('returns 1 for ([1, 2, 3, 4, 5], 2)', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1)
    })

    it('returns 2 for ([1, 2, 3, 4, 5], 3)', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2)
    })

    it('returns 4 for ([1, 2, 3, 4, 5], 5)', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4)
    })

    it('returns -1 for ([1, 2, 3, 4, 5], 6)', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1)
    })

    it('returns 2 for ([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)', () => {
        expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)).toEqual(2)
    })

    it('returns 16 for ([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)', () => {
        expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)).toEqual(16)
    })

    it('returns -1 for ([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)', () => {
        expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)).toEqual(-1)
    })
})