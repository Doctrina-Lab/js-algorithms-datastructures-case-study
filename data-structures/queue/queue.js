class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    let node = new Node(value)
    if (this.size === 0) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    return ++this.size
  }

  dequeue() {
    if (this.size === 0) return null
    let value = this.first.value
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      let temp = this.first
      this.first = this.first.next
      temp.next = null
    }
    this.size--
    return value
  }
}

module.exports = Queue
