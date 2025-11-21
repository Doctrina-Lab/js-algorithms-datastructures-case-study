const Graph = require('./graph')

describe('Graph', () => {
  it('creates an empty graph', () => {
    let graph = new Graph()
    expect(graph.adjacencyList).toEqual({})
  })
})

describe('Graph.addVertex', () => {
  it('adds a single vertex', () => {
    let graph = new Graph()
    graph.addVertex('A')
    expect(graph.adjacencyList['A']).toEqual([])
  })

  it('adds multiple vertices', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    expect(graph.adjacencyList['A']).toEqual([])
    expect(graph.adjacencyList['B']).toEqual([])
    expect(graph.adjacencyList['C']).toEqual([])
  })
})

describe('Graph.addEdge', () => {
  it('adds an edge between two vertices', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addEdge('A', 'B')
    expect(graph.adjacencyList['A']).toEqual(['B'])
    expect(graph.adjacencyList['B']).toEqual(['A'])
  })

  it('adds multiple edges', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('B', 'C')
    expect(graph.adjacencyList['A']).toEqual(['B', 'C'])
    expect(graph.adjacencyList['B']).toEqual(['A', 'C'])
    expect(graph.adjacencyList['C']).toEqual(['A', 'B'])
  })
})

describe('Graph.removeEdge', () => {
  it('removes an edge between two vertices', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addEdge('A', 'B')
    graph.removeEdge('A', 'B')
    expect(graph.adjacencyList['A']).toEqual([])
    expect(graph.adjacencyList['B']).toEqual([])
  })

  it('removes specific edge from graph with multiple edges', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('B', 'C')
    graph.removeEdge('A', 'B')
    expect(graph.adjacencyList['A']).toEqual(['C'])
    expect(graph.adjacencyList['B']).toEqual(['C'])
    expect(graph.adjacencyList['C']).toEqual(['A', 'B'])
  })
})

describe('Graph.removeVertex', () => {
  it('removes a vertex with no edges', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.removeVertex('A')
    expect(graph.adjacencyList['A']).toEqual(undefined)
    expect(graph.adjacencyList['B']).toEqual([])
  })

  it('removes a vertex with edges and cleans up connections', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.removeVertex('A')
    expect(graph.adjacencyList['A']).toEqual(undefined)
    expect(graph.adjacencyList['B']).toEqual([])
    expect(graph.adjacencyList['C']).toEqual([])
  })

  it('removes a vertex from complex graph and maintains other edges', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('B', 'C')
    graph.addEdge('C', 'D')
    graph.removeVertex('A')
    expect(graph.adjacencyList['A']).toEqual(undefined)
    expect(graph.adjacencyList['B']).toEqual(['C'])
    expect(graph.adjacencyList['C']).toEqual(['B', 'D'])
    expect(graph.adjacencyList['D']).toEqual(['C'])
  })
})

describe('Graph.depthFirstRecursive', () => {
  it('returns array with single vertex when graph has one vertex', () => {
    let graph = new Graph()
    graph.addVertex('A')
    expect(graph.depthFirstRecursive('A')).toEqual(['A'])
  })

  it('traverses linear graph in depth-first order', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('B', 'C')
    expect(graph.depthFirstRecursive('A')).toEqual(['A', 'B', 'C'])
  })

  it('traverses graph with branches in depth-first order', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('B', 'D')
    // Graph structure:
    //     A
    //    / \
    //   B   C
    //   |
    //   D
    const result = graph.depthFirstRecursive('A')
    expect(result).toContain('A')
    expect(result).toContain('B')
    expect(result).toContain('C')
    expect(result).toContain('D')
    expect(result.length).toEqual(4)
    // A should be first
    expect(result[0]).toEqual('A')
    // B should come before C (depth-first)
    expect(result.indexOf('B')).toBeLessThan(result.indexOf('C'))
    // D should come after B and before C (goes deep first)
    expect(result.indexOf('D')).toBeGreaterThan(result.indexOf('B'))
    expect(result.indexOf('D')).toBeLessThan(result.indexOf('C'))
  })

  it('traverses complex graph and visits all reachable vertices', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('B', 'D')
    graph.addEdge('C', 'E')
    graph.addEdge('D', 'E')
    graph.addEdge('D', 'F')
    graph.addEdge('E', 'F')
    //       A
    //      / \
    //     B   C
    //     |   |
    //     D - E
    //      \ /
    //       F
    const result = graph.depthFirstRecursive('A')
    expect(result.length).toEqual(6)
    expect(result).toContain('A')
    expect(result).toContain('B')
    expect(result).toContain('C')
    expect(result).toContain('D')
    expect(result).toContain('E')
    expect(result).toContain('F')
    // A should be first
    expect(result[0]).toEqual('A')
  })

  it('returns only reachable vertices in disconnected graph', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A', 'B')
    graph.addEdge('C', 'D')
    // Two disconnected components: A-B and C-D
    const result = graph.depthFirstRecursive('A')
    expect(result).toEqual(['A', 'B'])
    expect(result).not.toContain('C')
    expect(result).not.toContain('D')
  })

  it('returns empty array when starting from non-existent vertex', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addEdge('A', 'B')
    expect(graph.depthFirstRecursive('Z')).toEqual([])
  })

  it('handles null or undefined start vertex', () => {
    let graph = new Graph()
    graph.addVertex('A')
    expect(graph.depthFirstRecursive(null)).toEqual([])
    expect(graph.depthFirstRecursive(undefined)).toEqual([])
  })
})

describe('Graph.depthFirstIterative', () => {
  it('returns array with single vertex when graph has one vertex', () => {
    let graph = new Graph()
    graph.addVertex('A')
    expect(graph.depthFirstIterative('A')).toEqual(['A'])
  })

  it('traverses linear graph in depth-first order', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('B', 'C')
    expect(graph.depthFirstIterative('A')).toEqual(['A', 'B', 'C'])
  })

  it('traverses graph with branches in depth-first order', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('B', 'D')
    // Graph structure:
    //     A
    //    / \
    //   B   C
    //   |
    //   D
    const result = graph.depthFirstIterative('A')
    expect(result).toContain('A')
    expect(result).toContain('B')
    expect(result).toContain('C')
    expect(result).toContain('D')
    expect(result.length).toEqual(4)
    // A should be first
    expect(result[0]).toEqual('A')
  })

  it('traverses complex graph and visits all reachable vertices', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addVertex('E')
    graph.addVertex('F')
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('B', 'D')
    graph.addEdge('C', 'E')
    graph.addEdge('D', 'E')
    graph.addEdge('D', 'F')
    graph.addEdge('E', 'F')
    //       A
    //      / \
    //     B   C
    //     |   |
    //     D - E
    //      \ /
    //       F
    const result = graph.depthFirstIterative('A')
    expect(result.length).toEqual(6)
    expect(result).toContain('A')
    expect(result).toContain('B')
    expect(result).toContain('C')
    expect(result).toContain('D')
    expect(result).toContain('E')
    expect(result).toContain('F')
    // A should be first
    expect(result[0]).toEqual('A')
  })

  it('returns only reachable vertices in disconnected graph', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')
    graph.addEdge('A', 'B')
    graph.addEdge('C', 'D')
    // Two disconnected components: A-B and C-D
    const result = graph.depthFirstIterative('A')
    expect(result).toEqual(['A', 'B'])
    expect(result).not.toContain('C')
    expect(result).not.toContain('D')
  })

  it('returns empty array when starting from non-existent vertex', () => {
    let graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addEdge('A', 'B')
    expect(graph.depthFirstIterative('Z')).toEqual([])
  })

  it('handles null or undefined start vertex', () => {
    let graph = new Graph()
    graph.addVertex('A')
    expect(graph.depthFirstIterative(null)).toEqual([])
    expect(graph.depthFirstIterative(undefined)).toEqual([])
  })
})