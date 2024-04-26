const linearSearch = require('./linear-search')

describe('linearSearch', () => {
    it('returns 1 for ([10, 15, 20, 25, 30], 15)', () => {
        expect(linearSearch([10, 15, 20, 25, 30], 15)).toEqual(1)
    })

    it('returns 5 for ([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)', () => {
        expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toEqual(5)
    })

    it('returns 0 for ([100], 100)', () => {
        expect(linearSearch([100], 100)).toEqual(0)
    })

    it('returns -1 for ([1, 2, 3, 4, 5], 6)', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1)
    })

    it('returns -1 for ([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)', () => {
        expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toEqual(-1)
    })

    it('returns -1 for ([100], 200)', () => {
        expect(linearSearch([100], 200)).toEqual(-1)
    })
})