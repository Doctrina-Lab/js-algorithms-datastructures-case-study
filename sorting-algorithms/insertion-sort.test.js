const insertionSort = require('./insertion-sort')

describe('selection sort', () => {
    it('sorts empty array', () => {
        expect(insertionSort([])).toEqual([])
    })

    it('sorts array with one element', () => {
        expect(insertionSort([3])).toEqual([3])
    })

    it('sorts array with two elements sorted', () => {
        expect(insertionSort([1, 2])).toEqual([1, 2])
    })

    it('sorts two elements', () => {
        expect(insertionSort([2, 1])).toEqual([1, 2])
    })

    it('sorts complex array', () => {
        expect(insertionSort([13,3,2,14,71,6,13,3])).toEqual([2,3,3,6,13,13,14,71])
    })
})
