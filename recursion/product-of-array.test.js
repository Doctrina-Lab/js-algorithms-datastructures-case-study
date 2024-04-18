const productOfArray = require('./product-of-array')

describe('productOfArray', () => {
    it('returns 1 for []', () => {
        expect(productOfArray([])).toEqual(1)
    })
    it('returns 42 for [42]', () => {
        expect(productOfArray([42])).toEqual(42)
    })
    it('returns 6 for [2, 3]', () => {
        expect(productOfArray([2, 3])).toEqual(6)
    })
    it('returns 6 for [1, 2, 3]', () => {
        expect(productOfArray([1, 2, 3])).toEqual(6)
    })
    it('returns 6 for [1, 2, 3, 10]', () => {
        expect(productOfArray([1, 2, 3, 10])).toEqual(60)
    })
})