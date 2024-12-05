const { getDigit, digitCount, mostDigits, radixSort } = require('./radix-sort')

describe('getDigit', () => {
  it('returns 0 when digit index is greater than number of digits', () => {
    expect(getDigit(3, 3)).toEqual(0)
  })

  it('returns 3 for number = 3, and digit index = 0', () => {
    expect(getDigit(3, 0)).toEqual(3)
  })

  it('returns 2 for number = 42, and digit index = 0', () => {
    expect(getDigit(42, 0)).toEqual(2)
  })

  it('returns 4 for number = 42, and digit index = 1', () => {
    expect(getDigit(42, 1)).toEqual(4)
  })

  it('returns 6 for number = 5687, and digit index = 2', () => {
    expect(getDigit(5687, 2)).toEqual(6)
  })

  it('returns 0 for number = -1234, and digit index = 4', () => {
    expect(getDigit(-1234, 4)).toEqual(0)
  })
})

describe('digitCount', () => {
  it('returns 1 for number = 0', () => {
    expect(digitCount(0)).toEqual(1)
  })

  it('returns 2 for number = 42', () => {
    expect(digitCount(42)).toEqual(2)
  })

  it('returns 5 for number = 12345', () => {
    expect(digitCount(12345)).toEqual(5)
  })

  it('return 4 for number = -2121', () => {
    expect(digitCount(-2121)).toEqual(4)
  })
})

describe('mostDigits', () => {
  it('returns 0 for empty array', () => {
    expect(mostDigits([])).toEqual(0)
  })

  it('returns 1 for [3]', () => {
    expect(mostDigits([3])).toEqual(1)
  })

  it('returns 2 for [42, 3]', () => {
    expect(mostDigits([42, 3])).toEqual(2)
  })

  it('returns 5 for [3, 42, -12345, 5678, 14, 2121]', () => {
    expect(mostDigits([3, 42, -12345, 5678, 14, 2121])).toEqual(5)
  })
})

describe('radixSort', () => {
  it('sorts empty array', () => {
    expect(radixSort([])).toEqual([])
  })

  it('sorts array with one element', () => {
    expect(radixSort([3])).toEqual([3])
  })

  it('sorts array with random positive numbers', () => {
    expect(radixSort([3, 0, 115, 45678, 33, 1234, 42])).toEqual([0, 3, 33, 42, 115, 1234, 45678])
  })
})
