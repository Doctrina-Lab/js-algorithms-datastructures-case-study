const { BinaryTree, Node } = require('./tree-traversal')

describe('BinaryTree creation', () => {
  it('creates an empty binary tree', () => {
    let sut = new BinaryTree()
    expect(sut.root).toEqual(null)
  })

  it('a newly created binary tree can be filled', () => {
    let sut = new BinaryTree()
    sut.root = new Node(10)
    expect(sut.root.value).toEqual(10)
  })
})

describe('BinaryTree breadth first search traversing', () => {
  it('traverses an empty tree', () => {
    let sut = new BinaryTree()
    expect(sut.breadthFirstSearchTraverse()).toEqual([])
  })

  it('traverses non-empty tree', () => {
    let sut = new BinaryTree()
    sut.root = new Node(10)
    sut.root.left = new Node(6)
    sut.root.left.left = new Node(3)
    sut.root.left.right = new Node(8)
    sut.root.right = new Node(15)
    sut.root.right.right = new Node(20)
    expect(sut.breadthFirstSearchTraverse()).toEqual([10, 6, 15, 3, 8, 20])
  })
})

describe('BinaryTree depth first search pre-order', () => {
  it('traverses an empty tree', () => {
    let sut = new BinaryTree()
    expect(sut.depthFirstSearchPreOrderTraverse()).toEqual([])
  })

  it('traverses non-empty tree', () => {
    let sut = new BinaryTree()
    sut.root = new Node(10)
    sut.root.left = new Node(6)
    sut.root.left.left = new Node(3)
    sut.root.left.right = new Node(8)
    sut.root.right = new Node(15)
    sut.root.right.right = new Node(20)
    expect(sut.depthFirstSearchPreOrderTraverse()).toEqual([10, 6, 3, 8, 15, 20])
  })
})

describe('BinaryTree depth first search post-order', () => {
  it('traverses an empty tree', () => {
    let sut = new BinaryTree()
    expect(sut.depthFirstSearchPostOrderTraverse()).toEqual([])
  })

  it('traverses non-empty tree', () => {
    let sut = new BinaryTree()
    sut.root = new Node(10)
    sut.root.left = new Node(6)
    sut.root.left.left = new Node(3)
    sut.root.left.right = new Node(8)
    sut.root.right = new Node(15)
    sut.root.right.right = new Node(20)
    expect(sut.depthFirstSearchPostOrderTraverse()).toEqual([3, 8, 6, 20, 15, 10])
  })
})

describe('BinaryTree depth first search in-order', () => {
  it('traverses an empty tree', () => {
    let sut = new BinaryTree()
    expect(sut.depthFirstSearchInOrderTraverse()).toEqual([])
  })

  it('traverses non-empty tree', () => {
    let sut = new BinaryTree()
    sut.root = new Node(10)
    sut.root.left = new Node(6)
    sut.root.left.left = new Node(3)
    sut.root.left.right = new Node(8)
    sut.root.right = new Node(15)
    sut.root.right.right = new Node(20)
    expect(sut.depthFirstSearchInOrderTraverse()).toEqual([3, 6, 8, 10, 15, 20])
  })
})
