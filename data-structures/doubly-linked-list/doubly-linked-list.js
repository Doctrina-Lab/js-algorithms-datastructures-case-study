class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {}

  pop() {}

  shift() {}

  unshift(value) {}

  get(index) {}

  set(index, value) {}

  insert(index, value) {}

  remove(index) {}

  reverse() {}
}

module.exports = DoublyLinkedList
