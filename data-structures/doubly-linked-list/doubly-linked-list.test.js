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

describe('DoublyLinkedList.pop', () => {
  it('returns undefined for an empty list', () => {
    let list = new DoublyLinkedList()
    expect(list.pop()).toEqual(undefined)
  })

  it('returns single node value and removes it from one-element list', () => {
    let list = new DoublyLinkedList()
    let value = 42
    list.push(value)
    expect(list.pop()).toEqual(value)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
    expect(list.length).toEqual(0)
  })

  it('returns the last node value and removes it from two-elements value', () => {
    let list = new DoublyLinkedList()
    let beforeLast = 3
    let last = 42
    list.push(beforeLast)
    list.push(last)
    expect(list.pop()).toEqual(last)
    expect(list.head.value).toEqual(beforeLast)
    expect(list.head.prev).toEqual(null)
    expect(list.head.next).toEqual(null)
    expect(list.tail.value).toEqual(beforeLast)
    expect(list.tail.prev).toEqual(null)
    expect(list.tail.next).toEqual(null)
    expect(list.length).toEqual(1)
  })

  it('returns the last node value and removes it from the larger list', () => {
    let list = new DoublyLinkedList()
    let beforeLast = 10
    let last = 42
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(beforeLast)
    list.push(last)
    expect(list.pop()).toEqual(last)
    expect(list.length).toEqual(4)
    expect(list.head.prev).toEqual(null)
    expect(list.head.value).toEqual(1)
    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(3)
    expect(list.head.next.next.next.value).toEqual(beforeLast)
    expect(list.head.next.next.next.next).toEqual(null)
    expect(list.tail.value).toEqual(beforeLast)
    expect(list.tail.prev.value).toEqual(3)
    expect(list.tail.prev.prev.value).toEqual(2)
    expect(list.tail.prev.prev.prev.value).toEqual(1)
    expect(list.tail.prev.prev.prev.prev).toEqual(null)
    expect(list.tail.next).toEqual(null)
  })
})

describe('DoublyLinkedList.shift', () => {
  it('returns undefined for empty list', () => {
    let list = new DoublyLinkedList()
    expect(list.shift()).toEqual(undefined)
  })

  it('shifts one-item list', () => {
    let list = new DoublyLinkedList()
    list.push(3)
    let head = list.head
    expect(list.shift()).toEqual(head)
    expect(list.length).toEqual(0)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
  })

  it('shifts larger list', () => {
    let list = new DoublyLinkedList()
    list.push(3)
    list.push(42)
    list.push(33)
    list.push(21)
    let head = list.head
    expect(list.shift()).toEqual(head)
    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(42)
    expect(list.head.next.value).toEqual(33)
    expect(list.head.next.next.value).toEqual(21)
    expect(list.head.next.next.next).toEqual(null)
    expect(list.tail.value).toEqual(21)
    expect(list.tail.prev.value).toEqual(33)
    expect(list.tail.prev.prev.value).toEqual(42)
    expect(list.tail.prev.prev.prev).toEqual(null)
  })

  it('shifts larger list a few times', () => {
    let list = new DoublyLinkedList()
    list.push(3)
    list.push(42)
    list.push(33)
    list.push(21)
    let head = list.head
    expect(list.shift()).toEqual(head)
    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(42)
    expect(list.head.next.value).toEqual(33)
    expect(list.head.next.next.value).toEqual(21)
    expect(list.head.next.next.next).toEqual(null)
    expect(list.tail.value).toEqual(21)
    expect(list.tail.prev.value).toEqual(33)
    expect(list.tail.prev.prev.value).toEqual(42)
    expect(list.tail.prev.prev.prev).toEqual(null)
    head = list.head
    expect(list.shift()).toEqual(head)
    expect(list.length).toEqual(2)
    expect(list.head.value).toEqual(33)
    expect(list.head.next.value).toEqual(21)
    expect(list.head.next.next).toEqual(null)
    expect(list.tail.value).toEqual(21)
    expect(list.tail.prev.value).toEqual(33)
    expect(list.tail.prev.prev).toEqual(null)
  })
})

describe('DoublyLinkedList.unshift', () => {
  it('prepends a new node to an empty list', () => {
    let list = new DoublyLinkedList()
    let newList = list.unshift(3)
    expect(list.length).toEqual(1)
    expect(list.head.value).toEqual(3)
    expect(list.tail.value).toEqual(3)
    expect(list.head.prev).toEqual(null)
    expect(list.head.next).toEqual(null)
    expect(list.tail.prev).toEqual(null)
    expect(list.tail.next).toEqual(null)
    expect(newList.length).toEqual(1)
    expect(newList.head.value).toEqual(3)
    expect(newList.tail.value).toEqual(3)
    expect(newList.head.prev).toEqual(null)
    expect(newList.head.next).toEqual(null)
    expect(newList.tail.prev).toEqual(null)
    expect(newList.tail.next).toEqual(null)
  })

  it('prepends a new node to a one-item list', () => {
    let list = new DoublyLinkedList()
    list.push(42)
    let newList = list.unshift(3)
    expect(list.length).toEqual(2)
    expect(list.head.value).toEqual(3)
    expect(list.tail.value).toEqual(42)
    expect(list.head.prev).toEqual(null)
    expect(list.head.next.value).toEqual(42)
    expect(list.tail.prev.value).toEqual(3)
    expect(list.tail.next).toEqual(null)
    expect(newList.length).toEqual(2)
    expect(newList.head.value).toEqual(3)
    expect(newList.tail.value).toEqual(42)
    expect(newList.head.prev).toEqual(null)
    expect(newList.head.next.value).toEqual(42)
    expect(newList.tail.prev.value).toEqual(3)
    expect(newList.tail.next).toEqual(null)
  })

  it('prepends new nodes sequentially', () => {
    let list = new DoublyLinkedList()
    list.unshift(7)
    list.unshift(44)
    list.unshift(21)
    list.unshift(42)
    let newList = list.unshift(3)
    expect(list.length).toEqual(5)
    expect(list.head.value).toEqual(3)
    expect(list.tail.value).toEqual(7)
    expect(list.head.prev).toEqual(null)
    expect(list.head.next.value).toEqual(42)
    expect(list.head.next.next.value).toEqual(21)
    expect(list.head.next.next.next.value).toEqual(44)
    expect(list.head.next.next.next.next.value).toEqual(7)
    expect(list.head.next.next.next.next.next).toEqual(null)
    expect(list.tail.next).toEqual(null)
    expect(list.tail.prev.value).toEqual(44)
    expect(list.tail.prev.prev.value).toEqual(21)
    expect(list.tail.prev.prev.prev.value).toEqual(42)
    expect(list.tail.prev.prev.prev.prev.value).toEqual(3)
    expect(list.tail.prev.prev.prev.prev.prev).toEqual(null)
    expect(newList.length).toEqual(5)
    expect(newList.head.value).toEqual(3)
    expect(newList.tail.value).toEqual(7)
    expect(newList.head.prev).toEqual(null)
    expect(newList.head.next.value).toEqual(42)
    expect(newList.head.next.next.value).toEqual(21)
    expect(newList.head.next.next.next.value).toEqual(44)
    expect(newList.head.next.next.next.next.value).toEqual(7)
    expect(newList.head.next.next.next.next.next).toEqual(null)
    expect(newList.tail.prev.value).toEqual(44)
    expect(newList.tail.prev.prev.value).toEqual(21)
    expect(newList.tail.prev.prev.prev.value).toEqual(42)
    expect(newList.tail.prev.prev.prev.prev.value).toEqual(3)
    expect(newList.tail.prev.prev.prev.prev.prev).toEqual(null)
    expect(newList.tail.next).toEqual(null)
  })
})

describe('SinglyLinkedList.get', () => {
  it('returns null for empty list', () => {
    let list = new DoublyLinkedList()
    expect(list.get(0)).toEqual(null)
  })

  it('returns null for negative index', () => {
    let list = new DoublyLinkedList()
    list.push(1)
    expect(list.get(-1)).toEqual(null)
    expect(list.length).toEqual(1)
  })

  it('returns null for index greater than list length', () => {
    let list = new DoublyLinkedList()
    list.push(1)
    expect(list.get(3)).toEqual(null)
    expect(list.length).toEqual(1)
  })

  it('returns first node in one-item list', () => {
    let list = new DoublyLinkedList()
    list.push(1)
    let node = list.get(0)
    expect(node.value).toEqual(1)
    expect(list.length).toEqual(1)
  })

  it('returns node from the middle of larger list', () => {
    let list = new DoublyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    list.push(5)
    list.push(6)
    let node = list.get(3)
    expect(node.value).toEqual(4)
    expect(list.length).toEqual(6)
  })

  it('returns node from the end of larger list', () => {
    let list = new DoublyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    list.push(5)
    list.push(6)
    let node = list.get(5)
    expect(node.value).toEqual(6)
    expect(list.length).toEqual(6)
  })
})

