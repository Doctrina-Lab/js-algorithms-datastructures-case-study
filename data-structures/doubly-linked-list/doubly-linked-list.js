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
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      let oldTail = this.tail.next
      oldTail.prev = null
      this.tail.next = null
    }
    this.length--
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
    if (!this.head) return this.push(value)

    let node = new Node(value)
    node.next = this.head
    this.head.prev = node
    this.head = node
    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    if (index <= this.length / 2) {
      let node = this.head
      for (let i = 0; i !== index; i++) node = node.next
      return node
    } else {
      let node = this.tail
      for (let i = this.length - 1; i !== index; i--) node = node.prev
      return node
    }
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

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (!this.head) return undefined
    if (index === 0) return this.shift().value
    if (index === this.length - 1) return this.pop()
    let node = this.get(index)
    let prevNode = node.prev
    let nextNode = node.next
    prevNode.next = node.next
    nextNode.prev = node.prev
    node.next = null
    node.prev = null
    this.length--
    return node.value
  }

  reverse() {
    let current = this.head
    this.head = this.tail
    this.tail = current
    let next = null
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = current.next
      current.next = prev
      current.prev = next
      prev = current
      current = next
    }
    return this
  }
}

module.exports = DoublyLinkedList
