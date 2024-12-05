const selectionSort = require('./selection-sort')

describe('selection sort', () => {
    it('sorts empty array', () => {
        expect(selectionSort([])).toEqual([])
    })

    it('sorts array with one element', () => {
        expect(selectionSort([3])).toEqual([3])
    })

    it('sorts array with two elements sorted', () => {
        expect(selectionSort([1, 2])).toEqual([1, 2])
    })

    it('sorts two elements', () => {
        expect(selectionSort([2, 1])).toEqual([1, 2])
    })

    it('sorts complex array', () => {
        expect(selectionSort([13,3,2,14,71,6,13,3])).toEqual([2,3,3,6,13,13,14,71])
    })
})
