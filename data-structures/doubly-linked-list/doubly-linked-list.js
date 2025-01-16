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

  push(value) {
    let node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

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
