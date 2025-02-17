class Node {
  constructor(value) {
    this.next = null
    this.value = value
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(value) {
    let node = new Node(value)
    if (this.size === 0) {
      this.first = node
      this.last = node
    } else {
      node.next = this.first
      this.first = node
    }
    return ++this.size
  }

  pop() {
    if (this.size === 0) return null
    let node = this.first
    this.first = this.first.next
    node.next = null
    if (!this.first) this.last = null
    this.size--
    return node.value
  }
}

module.exports = Stack
