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
    if (this.values.length === 0) { return null }
    if (this.values.length === 1) { return this.values.pop() }
    swapFirstAndLast()
    let maxValue = this.values.pop()
    return maxValue
  }
}

module.exports = MaxBinaryHeap