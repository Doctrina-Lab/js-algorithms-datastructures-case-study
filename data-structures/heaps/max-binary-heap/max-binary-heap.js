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
      const parentElement = this.values[parentIndex]

      const swapParentAndChild = (childIndex, childElement) => {
        this.values[parentIndex] = childElement
        this.values[childIndex] = parentElement
        parentIndex = childIndex
      }

      while (true) {
        const leftChildIndex = 2 * parentIndex + 1
        const rightChildIndex = 2 * parentIndex + 2
        const length = this.values.length

        // parent does not have children (quit)
        if (leftChildIndex >= length && rightChildIndex >= length) {
          return
        }

        // parent has both children
        if (leftChildIndex < length && rightChildIndex < length) {
          const leftChildElement = this.values[leftChildIndex]
          const rightChildElement = this.values[rightChildIndex]

          // parent has both children and both children are smaller than parent (quit)
          if (leftChildElement < parentElement && rightChildElement < parentElement) {
            return
          }

          // parent has both children and both children are greater than parent
          if (leftChildElement > parentElement && rightChildElement > parentElement) {
            // left is greater than right (swap)
            if (leftChildElement > rightChildElement) {
              swapParentAndChild(leftChildIndex, leftChildElement)
            } // right is greater than left (swap)
            else {
              swapParentAndChild(rightChildIndex, rightChildElement)
            }
          } // parent has both children and left child is greater than parent (swap)
          else if (leftChildElement > parentElement) {
            swapParentAndChild(leftChildIndex, leftChildElement)
          } // parent has both children and right child is greater than parent
          else {
            swapParentAndChild(rightChildIndex, rightChildElement)
          }
        } // parent has left child
        else if (leftChildIndex < length) {
          const leftChildElement = this.values[leftChildIndex]

          // parent has left child and it's smaller than or equal to parent (quit)
          if (leftChildElement <= parentElement) {
            return
          } // parent has left child and it's greater than parent (swap)
          else {
            swapParentAndChild(leftChildIndex, leftChildElement)
          }
        } // parent has right child
        else if (rightChildIndex < length) {
          const rightChildElement = this.values[rightChildIndex]

          // parent has right child and it's smaller than or equal to parent (quit)
          if (rightChildElement <= parentElement) {
            return
          } // parent has right child and it's greater than parent
          else {
            swapParentAndChild(rightChildIndex, rightChildElement)
          }
        }
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