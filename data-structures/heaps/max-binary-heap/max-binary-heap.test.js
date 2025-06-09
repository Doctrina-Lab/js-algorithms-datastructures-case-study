const MaxBinaryHeap = require('./max-binary-heap')

describe('MaxBinaryHeap', () => {
  it('creates an empty MaxBinaryHeap instance', () => {
    let sut = new MaxBinaryHeap()
    expect(sut.values.length).toEqual(0)
  })

  it('inserts a value into an empty MaxBinaryHeap instance', () => {
    let sut = new MaxBinaryHeap()
    sut.insert(10)
    expect(sut.values).toEqual([10])
  })

  it('guarantees lower value to be a child', () => {
    let sut = new MaxBinaryHeap()
    sut.insert(10)
    sut.insert(5)
    expect(sut.values).toEqual([10, 5])
  })

  it('gurarantees bigger value to be a parent', () => {
    let sut = new MaxBinaryHeap()
    sut.insert(5)
    sut.insert(10)
    expect(sut.values).toEqual([10, 5])
  })

  it('guarantees proper order for complex heap', () => {
    let sut = new MaxBinaryHeap()
    sut.insert(7)
    sut.insert(17)
    sut.insert(100)
    sut.insert(1)
    sut.insert(36)
    sut.insert(25)
    sut.insert(19)
    sut.insert(3)
    sut.insert(2)
    expect(sut.values).toEqual([100, 36, 25, 3, 7, 17, 19, 1, 2])
  })

  it('returns null when extracts max from empty heap', () => {
    let sut = new MaxBinaryHeap()
    expect(sut.extractMax()).toEqual(null)
    expect(sut.values).toEqual([])
  })

  it('extracts max from single-item heap', () => {
    let sut = new MaxBinaryHeap()
    sut.insert(10)
    expect(sut.extractMax()).toEqual(10)
    expect(sut.values).toEqual([])
  })

  it('extracts max from two-items heap', () => {
    let sut = new MaxBinaryHeap()
    sut.insert(10)
    sut.insert(20)
    expect(sut.extractMax()).toEqual(20)
    expect(sut.values).toEqual([10])
  })
})