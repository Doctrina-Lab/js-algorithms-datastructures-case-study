class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  breadthFirstSearchTraverse() {
    if (!this.root) return []
    let queue = new Array(this.root)
    let visited = []
    while (queue.length !== 0) {
      let node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      visited.push(node.value)
    }
    return visited
  }

  depthFirstSearchPreOrderTraverse() {
    let visited = []

    function visit(node) {
      if (!node) return
      visited.push(node.value)
      visit(node.left)
      visit(node.right)
    }

    visit(this.root)

    return visited
  }

  depthFirstSearchPostOrderTraverse() {
    let visited = []

    function visit(node) {
      if (!node) return
      visit(node.left)
      visit(node.right)
      visited.push(node.value)
    }

    visit(this.root)

    return visited
  }

  depthFirstSearchInOrderTraverse() {
    let visited = []

    function visit(node) {
      if (!node) return
      visit(node.left)
      visited.push(node.value)
      visit(node.right)
    }

    visit(this.root)

    return visited
  }
}

module.exports = { BinaryTree, Node }
