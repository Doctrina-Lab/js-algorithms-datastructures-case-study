const Queue = require('./queue')

describe('Queue creation', () => {
  it('creates an empty queue', () => {
    let sut = new Queue()
    expect(sut.first).toEqual(null)
    expect(sut.last).toEqual(null)
    expect(sut.size).toEqual(0)
  })
})

describe('Queue enqueue', () => {
  it('appends values', () => {
    let sut = new Queue()
    expect(sut.enqueue(10)).toEqual(1)
    expect(sut.first.value).toEqual(10)
    expect(sut.last.value).toEqual(10)
    expect(sut.size).toEqual(1)

    expect(sut.enqueue(20)).toEqual(2)
    expect(sut.first.value).toEqual(10)
    expect(sut.last.value).toEqual(20)
    expect(sut.size).toEqual(2)

    expect(sut.enqueue(30)).toEqual(3)
    expect(sut.first.value).toEqual(10)
    expect(sut.last.value).toEqual(30)
    expect(sut.size).toEqual(3)
  })
})

describe('Queue dequeue', () => {
  it('returns null for empty queue', () => {
    let sut = new Queue()
    expect(sut.dequeue()).toEqual(null)
  })

  it('empties single-item queue', () => {
    let sut = new Queue()
    sut.enqueue(10)

    expect(sut.dequeue()).toEqual(10)
    expect(sut.first).toEqual(null)
    expect(sut.last).toEqual(null)
    expect(sut.size).toEqual(0)
  })

  it('empties multiple-items queue', () => {
    let sut = new Queue()
    sut.enqueue(10)
    sut.enqueue(20)
    sut.enqueue(30)

    expect(sut.dequeue()).toEqual(10)
    expect(sut.first.value).toEqual(20)
    expect(sut.last.value).toEqual(30)
    expect(sut.size).toEqual(2)

    expect(sut.dequeue()).toEqual(20)
    expect(sut.first.value).toEqual(30)
    expect(sut.last.value).toEqual(30)
    expect(sut.size).toEqual(1)

    expect(sut.dequeue()).toEqual(30)
    expect(sut.first).toEqual(null)
    expect(sut.last).toEqual(null)
    expect(sut.size).toEqual(0)
  })
})
