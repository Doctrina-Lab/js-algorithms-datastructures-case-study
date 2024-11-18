const { merge, mergeSort } = require('./merge-sort')

describe('merge', () => {
  it('merges empty arrays', () => {
    expect(merge([], [])).toEqual([])
  })

  it('merges one empty arrays at left', () => {
    expect(merge([], [3,4,5])).toEqual([3,4,5])
  })

  it('merges one empty arrays at right', () => {
    expect(merge([1,2], [])).toEqual([1,2])
  })

  it('merges arrays without duplicates', () => {
    expect(merge([1,2,5,7,9], [3,4,6,8])).toEqual([1,2,3,4,5,6,7,8,9])
  })

  it('merges arrays with duplicates', () => {
    expect(merge([1,2,4,7,9], [1,3,4,5,6,6,8])).toEqual([1,1,2,3,4,4,5,6,6,7,8,9])
  })
})

describe('mergeSort', () => {
  it('sorts empty array', () => {
    expect(mergeSort([])).toEqual([])
  })

  it('sorts array with one element', () => {
    expect(mergeSort([3])).toEqual([3])
  })

  it('sorts array with two elements sorted', () => {
    expect(mergeSort([1, 2])).toEqual([1, 2])
  })

  it('sorts two elements', () => {
    expect(mergeSort([2, 1])).toEqual([1, 2])
  })

  it('sorts complex array', () => {
    expect(mergeSort([13,3,2,14,71,6,13,3])).toEqual([2,3,3,6,13,13,14,71])
  })
})

