const Stack = require('./stack')

describe('Stack creation', () => {
  it('a newly created stack is empty', () => {
    let sut = new Stack()
    expect(sut.first).toEqual(null)
    expect(sut.last).toEqual(null)
    expect(sut.size).toEqual(0)
  })
})

describe('Stack pushing', () => {
  it('pushes new items to the Stack', () => {
    let sut = new Stack()

    expect(sut.push(1)).toEqual(1)
    expect(sut.first.value).toEqual(1)
    expect(sut.last.value).toEqual(1)
    expect(sut.size).toEqual(1)

    expect(sut.push(2)).toEqual(2)
    expect(sut.first.value).toEqual(2)
    expect(sut.last.value).toEqual(1)
    expect(sut.size).toEqual(2)

    expect(sut.push(42)).toEqual(3)
    expect(sut.first.value).toEqual(42)
    expect(sut.last.value).toEqual(1)
    expect(sut.size).toEqual(3)
  })
})

describe('Stack popping', () => {
  it('returns null when pop on empty stack', () => {
    let sut = new Stack()
    expect(sut.pop()).toEqual(null)
    expect(sut.first).toEqual(null)
    expect(sut.last).toEqual(null)
    expect(sut.size).toEqual(0)
  })

  it('empties a single-item stack', () => {
    let sut = new Stack()
    sut.push(42)
    expect(sut.pop()).toEqual(42)
    expect(sut.first).toEqual(null)
    expect(sut.last).toEqual(null)
    expect(sut.size).toEqual(0)
  })

  it('empties a multiple-items stack', () => {
    let sut = new Stack()
    sut.push(10)
    sut.push(20)
    sut.push(30)

    expect(sut.pop()).toEqual(30)
    expect(sut.first.value).toEqual(20)
    expect(sut.last.value).toEqual(10)
    expect(sut.size).toEqual(2)

    expect(sut.pop()).toEqual(20)
    expect(sut.first.value).toEqual(10)
    expect(sut.last.value).toEqual(10)
    expect(sut.size).toEqual(1)
 
    expect(sut.pop()).toEqual(10)
    expect(sut.first).toEqual(null)
    expect(sut.last).toEqual(null)
    expect(sut.size).toEqual(0)
  })
})
