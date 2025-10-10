const PriorityQueue = require('./priority-queue')
const { Node }  = require('./priority-queue')

describe('PriorityQueue', () => {
  it('creates an empty priority queue', () => {
    const sut = new PriorityQueue()
    expect(sut.values).toEqual([])
  })

  it('enqueues items in correct order', () => {
    let sut = new PriorityQueue()
    sut.enqueue('D', 3)
    sut.enqueue('A', 0)
    sut.enqueue('G', 6)
    sut.enqueue('B', 1)
    sut.enqueue('F', 5)
    sut.enqueue('C', 2)
    sut.enqueue('E', 4)
    expect(sut.values).toEqual([
      new Node('A', 0),
      new Node('B', 1),
      new Node('C', 2),
      new Node('D', 3),
      new Node('F', 5),
      new Node('G', 6),
      new Node('E', 4)
    ])
  })

  it('dequeues item preserving correct order', () => {
    let sut = new PriorityQueue()
    sut.enqueue('D', 3)
    sut.enqueue('A', 0)
    sut.enqueue('G', 6)
    sut.enqueue('B', 1)
    sut.enqueue('F', 5)
    sut.enqueue('C', 2)
    sut.enqueue('E', 4)
    expect(sut.dequeue()).toEqual(new Node('A', 0))
    expect(sut.values).toEqual([
      new Node('B', 1),
      new Node('D', 3),
      new Node('C', 2),
      new Node('E', 4),
      new Node('F', 5),
      new Node('G', 6)
    ])
  })
})