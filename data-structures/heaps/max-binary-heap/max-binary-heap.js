class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    const bubbleUp = () => {
      let currentIndex = this.values.length - 1
      let parentIndex = Math.floor((currentIndex - 1) / 2)
      while (this.values[parentIndex] < this.values[currentIndex]) {
        let temp = this.values[parentIndex]
        this.values[parentIndex] = this.values[currentIndex]
        this.values[currentIndex] = temp
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2)
      }
    }

    this.values.push(value)
    bubbleUp()
  }

  extractMax() {
    const swapFirstAndLast = () => {
      let temp = this.values[0]
      this.values[0] = this.values[this.values.length - 1]
      this.values[this.values.length - 1] = temp
    }

    const bubbleDown = () => {
      let parentIndex = 0
      const parent = this.values[parentIndex]
      const length = this.values.length

      while (true) {
        const leftChildIndex = 2 * parentIndex + 1
        const rightChildIndex = 2 * parentIndex + 2
        let leftChild
        let rightChild
        let swapIndex = null

        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex]
          if (parent < leftChild) {
            swapIndex = leftChildIndex
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex]
          if (
            (swapIndex !== null && rightChild > leftChild) 
            || (swapIndex === null && rightChild > parent)
          ) {
            swapIndex = rightChildIndex
          }
        }

        if (swapIndex === null) return

        this.values[parentIndex] = this.values[swapIndex]
        this.values[swapIndex] = parent
        parentIndex = swapIndex
      }
    }

    if (this.values.length === 0) { return null }
    if (this.values.length === 1) { return this.values.pop() }

    swapFirstAndLast()
    let maxValue = this.values.pop()
    bubbleDown()
    return maxValue
  }
}

module.exports = MaxBinaryHeap