const flatten = require('./flatten')

describe('flatten', () => {
    it('returns [] for flatten([])', () => {
        expect(flatten([])).toEqual([])
    })
    it('returns [1] for flatten([1])', () => {
        expect(flatten([1])).toEqual([1])
    })
    it('returns [1, 2] for flatten([1, 2])', () => {
        expect(flatten([1, 2])).toEqual([1, 2])
    })
    it('returns [] for flatten([[]])', () => {
        expect(flatten([[]])).toEqual([])
    })
    it('returns [1] for flatten([[1]])', () => {
        expect(flatten([[1]])).toEqual([1])
    })
    it('returns [1, 2] for flatten([[1, 2]])', () => {
        expect(flatten([[1, 2]])).toEqual([1, 2])
    })
    it('returns [1, 2] for flatten([1, [2]])', () => {
        expect(flatten([1, [2]])).toEqual([1, 2])
    })
    it('returns [1, [2], 3] for flatten([1, 2, 3])', () => {
        expect(flatten([1, [2], 3])).toEqual([1, 2, 3])
    })
    it('returns [2, 3, 1] for flatten([[2], 3, 1])', () => {
        expect(flatten([[2], 3, 1])).toEqual([2, 3, 1])
    })
    it('returns [2, 3, 1] for flatten([[2, 3], 1])', () => {
        expect(flatten([[2, 3], 1])).toEqual([2, 3, 1])
    })
    it('returns [2, 3, 1] for flatten([[2, 3], [1]])', () => {
        expect(flatten([[2, 3], [1]])).toEqual([2, 3, 1])
    })
    it('returns [5] for flatten([[[5]]])', () => {
        expect(flatten([[[5]]])).toEqual([5])
    })
    it('returns [1, 2, 3, 4, 5] for flatten([1, 2, 3, [4, 5]])', () => {
        expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5])
    })
    it('returns [1, 2, 3, 4, 5] for flatten([1, [2, [3, 4], [[5]]]])', () => {
        expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5])
    })
    it('returns [1, 2, 3] for flatten([[1],[2],[3]])', () => {
        expect(flatten([[1],[2],[3]])).toEqual([1, 2, 3])
    })
    it('returns [1, 2, 3] for flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])', () => {
        expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3])
    })
})
