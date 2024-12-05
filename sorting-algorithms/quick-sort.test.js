const { pivot, quickSort } = require('./quick-sort')

describe('pivot', () => {
  it('returns -1 on empty input array and does not modify input array', () => {
    let arr = []
    expect(pivot(arr)).toEqual(-1)
    expect(arr).toEqual([])
  })

  it('returns 0 on single-element input array and does not modify input array', () => {
    let arr = [3]
    expect(pivot(arr)).toEqual(0)
    expect(arr).toEqual([3])
  })

  it('returns 0 on two-elements sorted input array and does not modify input array', () => {
    let arr = [1, 2]
    expect(pivot(arr)).toEqual(0)
    expect(arr).toEqual([1, 2])
  })

  it('returns 1 on two-elements not sorted input array and modifies input array', () => {
    let arr = [2, 1]
    expect(pivot(arr)).toEqual(1)
    expect(arr).toEqual([1, 2])
  })

  it('returns last index for input array with bigest pivot and modifies input array', () => {
    let arr = [9, 2, 1, 7, 6]
    expect(pivot(arr)).toEqual(4)
    expect(arr).toEqual([6, 2, 1, 7, 9])
  })

  it('returns middle index for input array with middle-value pivot and modifies input array', () => {
    let arr = [5, 9, 2, 1, 3, 7, 6]
    expect(pivot(arr)).toEqual(3)
    expect(arr).toEqual([3, 2, 1, 5, 9, 7, 6])
  })
})

describe('quickSort', () => {
  it('returns empty array on empty input array', () => {
    let arr = []
    expect(quickSort(arr)).toEqual([]) 
  })

  it('returns single-element array on single-element input array', () => {
    let arr = [3]
    expect(quickSort(arr)).toEqual([3])
  })

  it('returns the same array as two-elements sorted input array', () => {
    let arr = [1, 2]
    expect(quickSort(arr)).toEqual([1, 2])
  })

  it('sorts two-elements not sorted input array', () => {
    let arr = [2, 1]
    expect(quickSort(arr)).toEqual([1, 2])
  })

  it('sorts input array with bigest pivot', () => {
    let arr = [9, 2, 1, 7, 6]
    expect(quickSort(arr)).toEqual([1, 2, 6, 7, 9])
  })

  it('sorts input array with middle-value pivot', () => {
    let arr = [5, 9, 2, 1, 3, 7, 6]
    expect(quickSort(arr)).toEqual([1, 2, 3, 5, 6, 7, 9])
  })

  it('sorts random input array', () => {
    let arr = [4, 8, 2, 1, 5, 7, 6, 3]
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
