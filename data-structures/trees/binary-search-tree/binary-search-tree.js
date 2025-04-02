class Node { constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let node = new Node(value)

    if (!this.root) { 
      this.root = node
      return
    }

    let current = this.root
    while (current) {
      if (current.value === value) {
        return
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = node
          return
        } else {
          current = current.left
        }
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node
          return
        } else {
          current = current.right
        }
      }
    }
  }

  find(value) {
    let current = this.root
    while (current) {
      if (current.value === value) {
        return current
      } else if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      }
    }
    return null
  }

  // TODO: refactoring is needed
  remove(value) {
    if (!this.root) return null

    if (this.root.value === value) {
      if (this.root.right) {
        let node = this.root.right
	while (node.left) {
          node = node.left
	}
        let nodeToRemove = this.root
	this.root = node
	return nodeToRemove
      } else if (this.root.left) {
	let nodeToRemove = this.root
	this.root = this.root.left
	return nodeToRemove
      } else {
        let nodeToRemove = this.root
	this.root = null
	return nodeToRemove
      }
    }

    let current = this.root
    let parent = this.root
    let isLeftBranch = null
    while (current) {
      if (current.value === value) {
        if (current.right) {
          let node = current.right
	  let nodeParent = node
          while (node.left) {
	    nodeParent = node
            node = node.left
	  }
	  if (node.right) {
            nodeParent.left = node.right
	    node.right = null
	  }
          let nodeToRemove = current
          current = node
	  current.left = nodeToRemove.left
	  if (current.value !== nodeToRemove.right.value) {
	    current.right = nodeToRemove.right
	  }
	  nodeToRemove.left = null
	  nodeToRemove.right = null
	  if (isLeftBranch) {
	    parent.left = current
	  } else {
	    parent.right = current
	  }
	  return nodeToRemove
	} else if (current.left) {
          let nodeToRemove = current
	  current = current.left
	  return nodeToRemove
	} else {
          parent.left = null
          parent.right = null
	  return current
	}
      } else if (current.value > value) {
	parent = current
        current = current.left
	isLeftBranch = true
      } else {
	parent = current
        current = current.right
	isLeftBranch = false
      }
    }
    return null
  }

  findSecondLargest() {
    if (!this.root) return undefined
    if (this.root.right) {
      let previousValue = this.root.value
      let maxValue = this.root.value
      let value = previousValue
      let current = this.root.right
      while (current) {
	value = current.value
	if (maxValue < value) {
          maxValue = value
	} else if (value < maxValue && value > previousValue) {
          previousValue = value
	}
	if (current.right) {
	  current = current.right
	} else {
          current = current.left
	}
      }
      if (previousValue === this.root.value && !this.root.right && !this.root.left) {
        return undefined
      }
      return previousValue
    } else if (this.root.left) {
      let current = this.root.left
      let value = current.value
      while (current) {
        value = current.value
	current = current.right
      }
      return value
    }
    return undefined
  }

  isBalanced() {
    function isBalanced(node, level) {
      if (!node) return level
      let left = isBalanced(node.left, level + 1)
      let right = isBalanced(node.right, level + 1)
      return Math.max(left, right)
    }

    if (!this.root) return true
    let left = isBalanced(this.root.left, 0)
    let right = isBalanced(this.root.right, 0)
    return Math.abs(left - right) <= 1
  }
}

module.exports = BinarySearchTree
