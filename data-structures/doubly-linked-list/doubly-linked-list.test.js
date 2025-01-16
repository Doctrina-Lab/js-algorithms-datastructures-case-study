const DoublyLinkedList = require('./doubly-linked-list')

describe('DoublyLinkedList creation', () => {
  it('creates an empty list', () => {
    let list = new DoublyLinkedList()
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
    expect(list.length).toEqual(0)
  })
})

