class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
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
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = this.head
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return undefined
    let oldHead = this.head
    this.head = this.head.next
    this.length--
    if (!this.head) this.tail = null
    return oldHead 
  }

  unshift(value) {
    let node = new Node(value)
    node.next = this.head
    this.head = node
    this.length++
    if (this.length === 1) this.tail = this.head
    return this
  }
  
  get(index) {
    if (index < 0 || index >= this.length) { return null }
    if (!this.head) { return null }
    let currentNode = this.head
    for (let i = 0; i != index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  set(index, value) {
    let node = this.get(index)
    if (!node) return false
    node.value =  value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)
    let previousNode = this.get(index - 1)
    let newNode = new Node(value)
    newNode.next = previousNode.next
    previousNode.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let previousNode = this.get(index - 1)
    let node = previousNode.next
    previousNode.next = previousNode.next.next
    this.length--
    return node
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
      prev = current
      current = next
    }
    return this
  }
}

module.exports = SinglyLinkedList
