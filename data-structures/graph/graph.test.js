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