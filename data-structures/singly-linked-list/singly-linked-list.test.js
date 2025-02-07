const SinglyLinkedList = require('./singly-linked-list')

describe('SinglyLinkedList creation', () => {
  it('creates an empty list', () => {
    let list = new SinglyLinkedList()
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
    expect(list.length).toEqual(0)
  })
})

describe('SinglyLinkedList.push', () => {
  it('pushes one element to an empty list', () => {
    let list = new SinglyLinkedList()
    let exp = 42
    list.push(exp)
    expect(list.head.value).toEqual(exp)
    expect(list.tail.value).toEqual(exp)
    expect(list.head.next).toEqual(null)
    expect(list.tail.next).toEqual(null)
    expect(list.length).toEqual(1)
  })

  it('pushes one element to a list with one element', () => {
    let list = new SinglyLinkedList()
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

describe('SinglyLinkedList.pop', () => {
  it('returns undefined for an empty list', () => {
    let list = new SinglyLinkedList()
    expect(list.pop()).toEqual(undefined)
  })

  it('returns single node and removes it from one-element list', () => {
    let list = new SinglyLinkedList()
    let value = 42
    list.push(value)
    expect(list.pop().value).toEqual(value)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
    expect(list.length).toEqual(0)
  })

  it('returns the last node and removes it from two-elements value', () => {
    let list = new SinglyLinkedList()
    let beforeLast = 3
    let last = 42
    list.push(beforeLast)
    list.push(last)
    expect(list.pop().value).toEqual(last)
    expect(list.head.value).toEqual(beforeLast)
    expect(list.tail.value).toEqual(beforeLast)
    expect(list.length).toEqual(1)
  })

  it('returns the last node and removes it from the larger list', () => {
    let list = new SinglyLinkedList()
    let beforeLast = 10
    let last = 42
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(beforeLast)
    list.push(last)
    expect(list.pop().value).toEqual(last)
    expect(list.length).toEqual(4)
    expect(list.tail.value).toEqual(beforeLast)
    expect(list.tail.next).toEqual(null)
  })
})

describe('SinglyLinkedList.shift', () => {
  it('returns undefined for empty list', () => {
    let list = new SinglyLinkedList()
    expect(list.shift()).toEqual(undefined)
  })

  it('shifts one-item list', () => {
    let list = new SinglyLinkedList()
    list.push(3)
    let head = list.head
    expect(list.shift()).toEqual(head)
    expect(list.length).toEqual(0)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
  })

  it('shifts larger list', () => {
    let list = new SinglyLinkedList()
    list.push(3)
    list.push(42)
    list.push(33)
    list.push(21)
    let head = list.head
    expect(list.shift()).toEqual(head)
    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(42)
    expect(list.tail.value).toEqual(21)
  })

  it('shifts larger list a few times', () => {
    let list = new SinglyLinkedList()
    list.push(3)
    list.push(42)
    list.push(33)
    list.push(21)
    let head = list.head
    expect(list.shift()).toEqual(head)
    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(42)
    expect(list.tail.value).toEqual(21)
    head = list.head
    expect(list.shift()).toEqual(head)
    expect(list.length).toEqual(2)
    expect(list.head.value).toEqual(33)
    expect(list.tail.value).toEqual(21)
  })
})

describe('SinglyLinkedList.unshift', () => {
  it('prepends a new node to an empty list', () => {
    let list = new SinglyLinkedList()
    let newList = list.unshift(3)
    expect(list.length).toEqual(1)
    expect(list.head.value).toEqual(3)
    expect(list.tail.value).toEqual(3)
    expect(list.head.next).toEqual(null)
    expect(list.tail.next).toEqual(null)
    expect(newList.length).toEqual(1)
    expect(newList.head.value).toEqual(3)
    expect(newList.tail.value).toEqual(3)
    expect(newList.head.next).toEqual(null)
    expect(newList.tail.next).toEqual(null)
  })

  it('prepends a new node to a one-item list', () => {
    let list = new SinglyLinkedList()
    list.push(42)
    let newList = list.unshift(3)
    expect(list.length).toEqual(2)
    expect(list.head.value).toEqual(3)
    expect(list.tail.value).toEqual(42)
    expect(list.head.next.value).toEqual(42)
    expect(list.tail.next).toEqual(null)
    expect(newList.length).toEqual(2)
    expect(newList.head.value).toEqual(3)
    expect(newList.tail.value).toEqual(42)
    expect(newList.head.next.value).toEqual(42)
    expect(newList.tail.next).toEqual(null)
  })

  it('prepends a new node to a larger list', () => {
    let list = new SinglyLinkedList()
    list.push(42)
    list.push(21)
    list.push(44)
    list.push(7)
    let newList = list.unshift(3)
    expect(list.length).toEqual(5)
    expect(list.head.value).toEqual(3)
    expect(list.tail.value).toEqual(7)
    expect(list.head.next.value).toEqual(42)
    expect(list.tail.next).toEqual(null)
    expect(newList.length).toEqual(5)
    expect(newList.head.value).toEqual(3)
    expect(newList.tail.value).toEqual(7)
    expect(newList.head.next.value).toEqual(42)
    expect(newList.tail.next).toEqual(null)
  })
})

describe('SinglyLinkedList.get', () => {
  it('returns null for empty list', () => {
    let list = new SinglyLinkedList()
    expect(list.get(0)).toEqual(null)
  })

  it('returns null for negative index', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    expect(list.get(-1)).toEqual(null)
  })

  it('returns null for index greater than list length', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    expect(list.get(3)).toEqual(null)
  })

  it('returns first node in one-item list', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    let node = list.get(0)
    expect(node.value).toEqual(1)
  })

  it('returns node from the middle of larger list', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    list.push(5)
    list.push(6)
    let node = list.get(3)
    expect(node.value).toEqual(4)
  })

  it('returns node from the end of larger list', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    list.push(5)
    list.push(6)
    let node = list.get(5)
    expect(node.value).toEqual(6)
  })
})

describe('SinglyLinkedList.set', () => {
  it('returns false for empty list and does not change the list', () => {
    let list = new SinglyLinkedList()
    expect(list.set(0, 13)).toEqual(false)
    expect(list.length).toEqual(0)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
  })

  it('returns false on negative index and does not change the list', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    expect(list.set(-1, 13)).toEqual(false)
    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(1)
    expect(list.tail.value).toEqual(3)
  })

  it('returns false on index greter than list length and does not change the list', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    list.push(2)
    list.push(3)
    expect(list.set(4, 13)).toEqual(false)
    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(1)
    expect(list.tail.value).toEqual(3)
  })

  it('returns true when change first item in one-item list', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    expect(list.set(0, 3)).toEqual(true)
    expect(list.length).toEqual(1)
    expect(list.head.value).toEqual(3)
    expect(list.tail.value).toEqual(3)
  })

   it('returns true when change mid item in longer list', () => {
     let list = new SinglyLinkedList()
     list.push(1)
     list.push(2)
     list.push(3)
     list.push(4)
     list.push(5)
     list.push(6)
     list.push(7)
     expect(list.set(4, 13)).toEqual(true)
     expect(list.length).toEqual(7)
     expect(list.head.value).toEqual(1)
     expect(list.tail.value).toEqual(7)
     expect(list.get(4).value).toEqual(13)
  })

   it('returns true when change the last item in longer list', () => {
     let list = new SinglyLinkedList()
     list.push(1)
     list.push(2)
     list.push(3)
     list.push(4)
     list.push(5)
     list.push(6)
     list.push(7)
     expect(list.set(6, 13)).toEqual(true)
     expect(list.length).toEqual(7)
     expect(list.head.value).toEqual(1)
     expect(list.tail.value).toEqual(13)
     expect(list.get(6).value).toEqual(13)
  })
})

describe('SinglyLinkedList.insert', () => {
  it('returns false when index to insert into is less than zero', () => {
    let emptyList = new SinglyLinkedList()
    expect(emptyList.insert(-1, 3)).toEqual(false)

    let nonEmptyList = new SinglyLinkedList()
    nonEmptyList.push(7)
    expect(nonEmptyList.insert(-1, 3)).toEqual(false)
  })

  it('returns false when index to insert into is greater than list length', () => {
    let emptyList = new SinglyLinkedList()
    expect(emptyList.insert(10, 3)).toEqual(false)

    let nonEmptyList = new SinglyLinkedList()
    nonEmptyList.push(7)
    expect(nonEmptyList.insert(10, 3)).toEqual(false)
  })

  it('returns true and pushes a new node if index is the same as list length', () => {
    let emptyList = new SinglyLinkedList()
    expect(emptyList.insert(0, 3)).toEqual(true)
    expect(emptyList.length).toEqual(1)
    expect(emptyList.head.value).toEqual(3)
    expect(emptyList.tail.value).toEqual(3)

    let nonEmptyList = new SinglyLinkedList()
    nonEmptyList.push(0)
    nonEmptyList.push(1)
    expect(nonEmptyList.insert(2, 3)).toEqual(true)
    expect(nonEmptyList.length).toEqual(3)
    expect(nonEmptyList.tail.value).toEqual(3)
  })

  it('returns true and unshifts a new node if index is 0', () => {
    let emptyList = new SinglyLinkedList()
    expect(emptyList.insert(0, 42)).toEqual(true)
    expect(emptyList.length).toEqual(1)
    expect(emptyList.head.value).toEqual(42)
    expect(emptyList.tail.value).toEqual(42)

    let nonEmptyList = new SinglyLinkedList()
    nonEmptyList.push(0)
    nonEmptyList.push(1)
    nonEmptyList.push(2)
    expect(nonEmptyList.insert(0, 42))
    expect(nonEmptyList.length).toEqual(4)
    expect(nonEmptyList.head.value).toEqual(42)
  })

  it('returns true and inserts a new node in the middle of the list', () => {
    let list = new SinglyLinkedList()
    list.push(0)
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    expect(list.insert(2, 42)).toEqual(true)
    expect(list.length).toEqual(6)
    expect(list.head.next.value).toEqual(1)
    expect(list.head.next.next.value).toEqual(42)
    expect(list.head.next.next.next.value).toEqual(2)
  })
})

describe('SinglyLinkedList.remove', () => {
  it('returns undefined if index is less than zero', () => {
    let emptyList = new SinglyLinkedList()
    expect(emptyList.remove(-1)).toEqual(undefined)

    let nonEmptyList = new SinglyLinkedList()
    nonEmptyList.push(42)
    expect(nonEmptyList.remove(-1)).toEqual(undefined)
    expect(nonEmptyList.length).toEqual(1)
    expect(nonEmptyList.head.value).toEqual(42)
    expect(nonEmptyList.tail.value).toEqual(42)
  })

  it('returns undefined if index is greeter than or equal to list length', () => {
    let emptyList = new SinglyLinkedList()
    expect(emptyList.remove(10)).toEqual(undefined)

    let nonEmptyList = new SinglyLinkedList()
    nonEmptyList.push(42)
    expect(nonEmptyList.remove(10)).toEqual(undefined)
    expect(nonEmptyList.length).toEqual(1)
    expect(nonEmptyList.head.value).toEqual(42)
    expect(nonEmptyList.tail.value).toEqual(42)
  })

  it('returns undefined for empty list when index is zero', () => {
    let list = new SinglyLinkedList()
    expect(list.remove(0)).toEqual(undefined)
  })

  it('removes first node for non-empty list', () => {
    let list = new SinglyLinkedList()
    list.push(0)
    list.push(1)
    list.push(2)
    expect(list.remove(0).value).toEqual(0)
    expect(list.length).toEqual(2)
    expect(list.head.value).toEqual(1)
    expect(list.tail.value).toEqual(2)
  })

  it('removes last node for non-empty list', () => {
    let list = new SinglyLinkedList()
    list.push(0)
    list.push(1)
    list.push(2)
    expect(list.remove(2).value).toEqual(2)
    expect(list.length).toEqual(2)
    expect(list.head.value).toEqual(0)
    expect(list.tail.value).toEqual(1)
  })

  it('removes middle node for non-empty list', () => {
    let list = new SinglyLinkedList()
    list.push(0)
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    expect(list.remove(2).value).toEqual(2)
    expect(list.length).toEqual(4)
    expect(list.head.value).toEqual(0)
    expect(list.tail.value).toEqual(4)
  })

  it('removes any node for non-empty list', () => {
    let list = new SinglyLinkedList()
    list.push(0)
    list.push(1)
    list.push(2)
    list.push(3)
    list.push(4)
    expect(list.remove(0).value).toEqual(0)
    expect(list.length).toEqual(4)
    expect(list.head.value).toEqual(1)
    expect(list.tail.value).toEqual(4)

    expect(list.remove(1).value).toEqual(2)
    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(1)
    expect(list.tail.value).toEqual(4)

    expect(list.remove(2).value).toEqual(4)
    expect(list.length).toEqual(2)
    expect(list.head.value).toEqual(1)
    expect(list.tail.value).toEqual(3)
  })
})

describe('SinglyLinkedList.reverse', () => {
  it('returns empty list when reverse empty list', () => {
    let list = new SinglyLinkedList()
    list.reverse()
    expect(list.length).toEqual(0)
    expect(list.head).toEqual(null)
    expect(list.tail).toEqual(null)
  })

  it('returns one-item list when reverse one-item list', () => {
    let list = new SinglyLinkedList()
    list.push(42)
    list.reverse()
    expect(list.length).toEqual(1)
    expect(list.head.value).toEqual(42)
    expect(list.tail.value).toEqual(42)
  })

  it('returns reversed two-items list when reverse two-items list', () => {
    let list = new SinglyLinkedList()
    list.push(42)
    list.push(37)
    list.reverse()
    expect(list.length).toEqual(2)
    expect(list.head.value).toEqual(37)
    expect(list.tail.value).toEqual(42)
  })

  it('returns reversed three-items list when reverse three-items list', () => {
    let list = new SinglyLinkedList()
    list.push(42)
    list.push(37)
    list.push(14)
    list.reverse()
    expect(list.length).toEqual(3)
    expect(list.head.value).toEqual(14)
    expect(list.tail.value).toEqual(42)
    expect(list.head.next.value).toEqual(37)
  })

  it('returns reversed list when reverse larger list with even number of items', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    list.push(3)
    list.push(5)
    list.push(2)
    list.push(4)
    list.push(6)
    list.reverse()
    expect(list.length).toEqual(6)
    expect(list.head.value).toEqual(6)
    expect(list.head.next.value).toEqual(4)
    expect(list.head.next.next.value).toEqual(2)
    expect(list.head.next.next.next.value).toEqual(5)
    expect(list.head.next.next.next.next.value).toEqual(3)
    expect(list.head.next.next.next.next.next.value).toEqual(1)
    expect(list.tail.value).toEqual(1)
  })

  it('returns reversed list when reverse larger list with odd number of items', () => {
    let list = new SinglyLinkedList()
    list.push(1)
    list.push(3)
    list.push(5)
    list.push(2)
    list.push(4)
    list.reverse()
    expect(list.length).toEqual(5)
    expect(list.head.value).toEqual(4)
    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(5)
    expect(list.head.next.next.next.value).toEqual(3)
    expect(list.head.next.next.next.next.value).toEqual(1)
    expect(list.tail.value).toEqual(1)
  })
})
