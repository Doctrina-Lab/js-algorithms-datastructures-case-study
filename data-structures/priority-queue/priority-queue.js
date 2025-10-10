class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    const bubbleUp = () => {
      let currentIndex = this.values.length - 1
      let parentIndex = Math.floor((currentIndex - 1) / 2)
      while (
        (parentIndex < this.values.length && parentIndex >= 0) 
        && this.values[currentIndex].priority < this.values[parentIndex].priority
      ) {
        let temp = this.values[parentIndex]
        this.values[parentIndex] = this.values[currentIndex]
        this.values[currentIndex] = temp
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2)
      }
    }

    this.values.push(new Node(value, priority))
    bubbleUp()
  }

  dequeue() {
    const swapFirstAndLast = () => {
      let temp = this.values[0]
      this.values[0] = this.values[this.values.length - 1]
      this.values[this.values.length - 1] = temp
    }

    const bubbleDown = (parentIndex) => {
      const parent = this.values[parentIndex]
      const length = this.values.length

      const leftChildIndex = 2 * parentIndex + 1
      const rightChildIndex = 2 * parentIndex + 2
      let leftChild
      let rightChild
      let swapIndex = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < parent.priority) {
          swapIndex = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swapIndex !== null && rightChild.priority < leftChild.priority) 
          || (swapIndex === null && rightChild.priority < parent.priority)
        ) {
          swapIndex = rightChildIndex
        }
      }

      if (swapIndex === null) return

      this.values[parentIndex] = this.values[swapIndex]
      this.values[swapIndex] = parent
      
      bubbleDown(swapIndex)
    }

    if (this.values.length === 0) { return null }
    if (this.values.length === 1) { return this.values.pop() }

    swapFirstAndLast()
    let highPriorityNode = this.values.pop()
    bubbleDown(0)
    return highPriorityNode
  }
}

module.exports = PriorityQueue
module.exports.Node = Node