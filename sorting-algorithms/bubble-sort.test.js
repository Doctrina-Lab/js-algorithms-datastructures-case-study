const bubbleSort = require('./bubble-sort')

describe('bubble sort', () => {
    it('sorts empty array', () => {
        expect(bubbleSort([])).toEqual([])
    })

    it('sorts array with one element', () => {
        expect(bubbleSort([3])).toEqual([3])
    })

    it('sorts array with two elements sorted', () => {
        expect(bubbleSort([1, 2])).toEqual([1, 2])
    })

    it('sorts two elements', () => {
        expect(bubbleSort([2, 1])).toEqual([1, 2])
    })

    it('sorts complex array', () => {
        expect(bubbleSort([13,3,2,14,71,6,13,3])).toEqual([2,3,3,6,13,13,14,71])
    })
})