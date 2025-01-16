const DoublyLinkedList = require('./doubly-linked-list')

describe('DoublyLinkedList creation', () => {
  it('creates an empty list', () => {
    let list = new DoublyLinkedList()
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
    expect(list.length).toEqual(0)
  })
})

describe('DoublyLinkedList.push', () => {
  it('pushes one element to an empty list', () => {
    let list = new DoublyLinkedList()
    let exp = 42
    list.push(exp)
    expect(list.head.value).toEqual(exp)
    expect(list.tail.value).toEqual(exp)
    expect(list.head.prev).toEqual(null)
    expect(list.head.next).toEqual(null)
    expect(list.tail.prev).toEqual(null)
    expect(list.tail.next).toEqual(null)
    expect(list.length).toEqual(1)
  })

  it('pushes one element to a list with one element', () => {
    let list = new DoublyLinkedList()
    let first = 3
    let second = 42
    list.push(first)
    list.push(second)
    expect(list.head.value).toEqual(first)
    expect(list.tail.value).toEqual(second)
    expect(list.head.next).toEqual(list.tail)
    expect(list.tail.next).toEqual(null)
    expect(list.length).toEqual(2)
  })
})

