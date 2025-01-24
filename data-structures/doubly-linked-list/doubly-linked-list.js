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
    return this
  }

  pop() {
    if (!this.head) return undefined
    let value = this.tail.value
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      let oldTail = this.tail.next
      oldTail.prev = null
      this.tail.next = null
    }
    return value
  }

  shift() {
    if (!this.head) return undefined
    let node = this.head
    if (this.length === 1) {
      this.pop()
    } else {
      this.head = node.next
      this.head.prev = null
      node.next = null
      this.length--
    }
    return node
  }

  unshift(value) {
    if (!this.head) {
      this.push(value)
    } else {
      let node = new Node(value)
      node.next = this.head
      this.head.prev = node
      this.head = node
      this.length++
    }

    return this
  }

  get(index) {
    if (!this.head) return null
    if (index < 0 || index >= this.length) return null
    let node = this.head
    for (let i = 0; i < index; i++) node = node.next
    return node
  }

  set(index, value) {
    let node = this.get(index)
    if (!node) return false
    node.value = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)
    let current = this.get(index)
    let node = new Node(value)
    node.prev = current.prev
    node.next = current
    current.prev = node
    node.prev.next = node
    this.length++
    return true
  }

  remove(index) {}

  reverse() {}
}

module.exports = DoublyLinkedList
