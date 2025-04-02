const BinarySearchTree = require('./binary-search-tree')

describe('BinarySearchTree creation', () => {
  it('creates an empty binary search tree', () => {
    let sut = new BinarySearchTree()
    expect(sut.root).toEqual(null)
  })
})

describe('BinarySearchTree insertion', () => {
  it('inserts a node as root of en empty binary search tree', () => {
    let sut = new BinarySearchTree()
    
    sut.insert(42)
    
    expect(sut.root.value).toEqual(42)
    expect(sut.root.left).toEqual(null)
    expect(sut.root.right).toEqual(null)
  })

  it('does not insert the same value as root has', () => {
    let sut = new BinarySearchTree()
    sut.insert(42)
    sut.insert(41)
    sut.insert(43)

    sut.insert(42)

    expect(sut.root.value).toEqual(42)
    expect(sut.root.left.value).toEqual(41)
    expect(sut.root.right.value).toEqual(43)
  })

  it('inserts nodes correctly', () => {
    let sut = new BinarySearchTree()
    sut.insert(42)
    sut.insert(1)
    sut.insert(101)
    sut.insert(41)
    sut.insert(43)

    expect(sut.root.value).toEqual(42)
    expect(sut.root.left.value).toEqual(1)
    expect(sut.root.left.left).toEqual(null)
    expect(sut.root.left.right.value).toEqual(41)
    expect(sut.root.right.value).toEqual(101)
    expect(sut.root.right.left.value).toEqual(43)
    expect(sut.root.right.right).toEqual(null)
  })
})

describe('BinarySearchTree find', () => {
  it('returns null for empty tree', () => {
    let sut = new BinarySearchTree()
    expect(sut.find(42)).toEqual(null)
  })

  it('returns null for non empty tree without such a value', () => {
    let sut = new BinarySearchTree()
    sut.insert(42)
    sut.insert(3)
    sut.insert(1492)
    
    expect(sut.find(1)).toEqual(null)
  })

  it('returns a node when it finds a value in a tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(42)
    sut.insert(3)
    sut.insert(1492)
    sut.insert(5)
    sut.insert(64)
    sut.insert(48)

    expect(sut.find(1492).value).toEqual(1492)
  })
})

describe('BinarySearchTree remove', () => {
  it('returns null for empty tree', () => {
    let sut = new BinarySearchTree()
    expect(sut.remove(42)).toEqual(null)
  })

  it('empties single node tree if values are equal', () => {
    let sut = new BinarySearchTree()
    sut.insert(42)
    expect(sut.remove(42).value).toEqual(42)
    expect(sut.root).toEqual(null)
  })

  it('removes root from two-nodes tree where child is the largest', () => {
    let sut = new BinarySearchTree()
    sut.insert(1)
    sut.insert(2)
    expect(sut.remove(1).value).toEqual(1)
    expect(sut.root.value).toEqual(2)
  })

  it('removes root from two-nodes tree where child is the smallest', () => {
    let sut = new BinarySearchTree()
    sut.insert(2)
    sut.insert(1)
    expect(sut.remove(2).value).toEqual(2)
    expect(sut.root.value).toEqual(1)
  })

  it('removes root from more complex tree where root.right is not null', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    sut.insert(2)
    sut.insert(4)
    sut.insert(6)
    sut.insert(1)
    sut.insert(3)
    sut.insert(5)
    sut.insert(12)
    sut.insert(14)
    sut.insert(16)
    sut.insert(11)
    sut.insert(13)
    sut.insert(15)
    expect(sut.remove(10).value).toEqual(10)
    expect(sut.root.value).toEqual(11)
  })

  it('removes root from more complex tree where root.right is null', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    sut.insert(2)
    sut.insert(4)
    sut.insert(6)
    sut.insert(1)
    sut.insert(3)
    sut.insert(5)
    expect(sut.remove(10).value).toEqual(10)
    expect(sut.root.value).toEqual(2)
  })

  it('removes a node from the right of the tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    sut.insert(2)
    sut.insert(4)
    sut.insert(6)
    sut.insert(1)
    sut.insert(3)
    sut.insert(5)
    sut.insert(12)
    sut.insert(14)
    sut.insert(16)
    sut.insert(11)
    sut.insert(13)
    sut.insert(15)
    expect(sut.remove(14).value).toEqual(14)
    expect(sut.root.right.right.value).toEqual(15)
  })

  it('removes a node from the left of the tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    sut.insert(2)
    sut.insert(4)
    sut.insert(6)
    sut.insert(1)
    sut.insert(3)
    sut.insert(5)
    sut.insert(12)
    sut.insert(14)
    sut.insert(16)
    sut.insert(11)
    sut.insert(13)
    sut.insert(15)
    expect(sut.remove(4).value).toEqual(4)
    expect(sut.root.left.right.value).toEqual(5)
  })

  it('removes one of the leaves from the right of the tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    sut.insert(2)
    sut.insert(4)
    sut.insert(6)
    sut.insert(1)
    sut.insert(3)
    sut.insert(5)
    sut.insert(12)
    sut.insert(14)
    sut.insert(16)
    sut.insert(11)
    sut.insert(13)
    sut.insert(15)
    expect(sut.remove(13).value).toEqual(13)
    expect(sut.root.right.right.value).toEqual(14)
    expect(sut.root.right.right.left).toEqual(null)
  })

  it('removes one of the leaves from the left of the tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    sut.insert(2)
    sut.insert(4)
    sut.insert(6)
    sut.insert(1)
    sut.insert(3)
    sut.insert(5)
    sut.insert(12)
    sut.insert(14)
    sut.insert(16)
    sut.insert(11)
    sut.insert(13)
    sut.insert(15)
    expect(sut.remove(3).value).toEqual(3)
    expect(sut.root.left.right.value).toEqual(4)
    expect(sut.root.left.right.left).toEqual(null)
  })

  it('removes a node with no children', () => {
    let sut = new BinarySearchTree()
    sut.insert(15)
    sut.insert(20)
    sut.insert(10)
    sut.insert(12)
    sut.insert(1)
    sut.insert(5)
    sut.insert(50)
    
    expect(sut.remove(50).value).toEqual(50)
    expect(sut.root.right.value).toEqual(20)
    expect(sut.root.right.right).toEqual(null)
    
    expect(sut.remove(5).value).toEqual(5)
    expect(sut.root.left.left.value).toEqual(1)
    expect(sut.root.left.left.right).toEqual(null)
  })

  it('removes a node with one children', () => {
    let sut = new BinarySearchTree()
    sut.insert(15)
    sut.insert(20)
    sut.insert(10)
    sut.insert(12)
    sut.insert(1)
    sut.insert(5)
    sut.insert(50)
    
    expect(sut.remove(1).value).toEqual(1)
    expect(sut.root.left.left.value).toEqual(5)
    expect(sut.root.left.left.left).toEqual(null)
    expect(sut.root.left.left.right).toEqual(null)

    expect(sut.remove(20).value).toEqual(20)
    expect(sut.root.right.value).toEqual(50)
    expect(sut.root.right.right).toEqual(null)
    expect(sut.root.right.left).toEqual(null)
  })

  it('removes a node with two children', () => {
    let sut = new BinarySearchTree()
    sut.insert(15)
    sut.insert(20)
    sut.insert(10)
    sut.insert(12)
    sut.insert(1)
    sut.insert(5)
    sut.insert(50)
    sut.insert(60)
    sut.insert(30)
    sut.insert(25)
    sut.insert(23)
    sut.insert(24)
    sut.insert(70)

    expect(sut.remove(10).value).toEqual(10)
    expect(sut.root.left.value).toEqual(12)
    expect(sut.root.left.left.value).toEqual(1)
    expect(sut.root.left.left.right.value).toEqual(5)

    expect(sut.remove(50).value).toEqual(50)
    expect(sut.root.right.value).toEqual(20)
    expect(sut.root.right.right.value).toEqual(60)
    expect(sut.root.right.right.left.value).toEqual(30)
  })

  it('removes a node with two children and handles the children of the removed node', () => {
    let sut = new BinarySearchTree()
    sut.insert(22)
    sut.insert(49)
    sut.insert(85)
    sut.insert(66)
    sut.insert(95)
    sut.insert(90)
    sut.insert(99)
    sut.insert(88)
    sut.insert(93)
    sut.insert(89)

    expect(sut.remove(85).value).toEqual(85)
    expect(sut.root.right.right.value).toEqual(88)
    expect(sut.root.right.right.right.left.left.value).toEqual(89)
  })
})

describe('BinarySearchTree.findSecondLargest', () => {
  it('returns undefined for empty tree', () => {
    let sut = new BinarySearchTree()
    expect(sut.findSecondLargest()).toEqual(undefined)
  })

  it('returns undefined for one-node tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    expect(sut.findSecondLargest()).toEqual(undefined)
  })

  it('returns second largest for only left-branched tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    sut.insert(5)
    sut.insert(6)
    sut.insert(3)
    sut.insert(4)
    sut.insert(7)
    expect(sut.findSecondLargest()).toEqual(7)
  })

  it('returns second largest for only right-branched tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(10)
    sut.insert(20)
    sut.insert(15)
    sut.insert(13)
    sut.insert(17)
    sut.insert(18)
    expect(sut.findSecondLargest()).toEqual(18)
  })

  it('returns second largest for random two-branched tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(15)
    sut.insert(20)
    sut.insert(10)
    sut.insert(12)
    expect(sut.findSecondLargest()).toEqual(15)
  })
})

describe('BinarySearchTree.isBalanced', () => {
  it('returns true for an empty tree', () => {
    let sut = new BinarySearchTree()
    expect(sut.isBalanced()).toEqual(true)
  })

  it('returns true for tree with root only', () => {
    let sut = new BinarySearchTree()
    sut.insert(20)
    expect(sut.isBalanced()).toEqual(true)
  })

  it('returns true for complex tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(15)
    sut.insert(20)
    sut.insert(10)
    sut.insert(12)
    expect(sut.isBalanced()).toEqual(true)
  })

  it('returns false for comples tree', () => {
    let sut = new BinarySearchTree()
    sut.insert(5)
    expect(sut.isBalanced()).toEqual(true)
    sut.insert(6)
    expect(sut.isBalanced()).toEqual(true)
    sut.insert(7)
    expect(sut.isBalanced()).toEqual(false)
  })
})
