const WeightedGraph = require('./weighted-graph')

describe('WeightedGraph.shortestPath', () => {
  // Basic path finding tests
  describe('basic path finding', () => {
    it('finds path between two directly connected vertices', () => {
      const graph = new WeightedGraph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addEdge('A', 'B', 5)

      expect(graph.shortestPath('A', 'B')).toEqual(['A', 'B'])
    })

    it('finds path through intermediate vertex', () => {
      const graph = new WeightedGraph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addEdge('A', 'B', 2)
      graph.addEdge('B', 'C', 3)

      expect(graph.shortestPath('A', 'C')).toEqual(['A', 'B', 'C'])
    })
  })

  // Simple graph with 4 vertices
  describe('simple graph (4 vertices)', () => {
    /*
     * Graph structure:
     *     A --4-- B
     *     |       |
     *     2       3
     *     |       |
     *     C --1-- D
     *
     * Shortest path A’D: A’C’D (cost 3)
     * Not A’B’D (cost 7)
     */
    let graph

    it('chooses shorter path over direct route', () => {
      graph = new WeightedGraph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertex('D')
      graph.addEdge('A', 'B', 4)
      graph.addEdge('A', 'C', 2)
      graph.addEdge('B', 'D', 3)
      graph.addEdge('C', 'D', 1)

      expect(graph.shortestPath('A', 'D')).toEqual(['A', 'C', 'D'])
    })

    it('finds shortest path in reverse direction', () => {
      graph = new WeightedGraph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertex('D')
      graph.addEdge('A', 'B', 4)
      graph.addEdge('A', 'C', 2)
      graph.addEdge('B', 'D', 3)
      graph.addEdge('C', 'D', 1)

      expect(graph.shortestPath('D', 'A')).toEqual(['D', 'C', 'A'])
    })
  })

  // Complex graph with 6 vertices
  describe('complex graph (6 vertices)', () => {
    /*
     * Graph structure:
     *         A
     *        / \
     *       2   4
     *      /     \
     *     B---1---C
     *     |       |
     *     4       2
     *     |       |
     *     D---3---E
     *      \     /
     *       1   1
     *        \ /
     *         F
     */
    let graph

    function createComplexGraph() {
      const g = new WeightedGraph()
      g.addVertex('A')
      g.addVertex('B')
      g.addVertex('C')
      g.addVertex('D')
      g.addVertex('E')
      g.addVertex('F')
      g.addEdge('A', 'B', 2)
      g.addEdge('A', 'C', 4)
      g.addEdge('B', 'C', 1)
      g.addEdge('B', 'D', 4)
      g.addEdge('C', 'E', 2)
      g.addEdge('D', 'E', 3)
      g.addEdge('D', 'F', 1)
      g.addEdge('E', 'F', 1)
      return g
    }

    it('finds shortest path A to F', () => {
      graph = createComplexGraph()
      // A’B’C’E’F = 2+1+2+1 = 6
      // A’C’E’F = 4+2+1 = 7
      // A’B’D’F = 2+4+1 = 7
      expect(graph.shortestPath('A', 'F')).toEqual(['A', 'B', 'C', 'E', 'F'])
    })

    it('finds shortest path A to E', () => {
      graph = createComplexGraph()
      // A’B’C’E = 2+1+2 = 5
      // A’C’E = 4+2 = 6
      expect(graph.shortestPath('A', 'E')).toEqual(['A', 'B', 'C', 'E'])
    })

    it('finds shortest path A to D', () => {
      graph = createComplexGraph()
      // A’B’D = 2+4 = 6
      // A’B’C’E’D = 2+1+2+3 = 8
      expect(graph.shortestPath('A', 'D')).toEqual(['A', 'B', 'D'])
    })

    it('finds shortest path F to A', () => {
      graph = createComplexGraph()
      // F’E’C’B’A = 1+2+1+2 = 6
      expect(graph.shortestPath('F', 'A')).toEqual(['F', 'E', 'C', 'B', 'A'])
    })
  })

  // Edge cases
  describe('edge cases', () => {
    it('returns array with single vertex when start equals finish', () => {
      const graph = new WeightedGraph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addEdge('A', 'B', 5)

      expect(graph.shortestPath('A', 'A')).toEqual(['A'])
    })

    it('handles single vertex graph', () => {
      const graph = new WeightedGraph()
      graph.addVertex('A')

      expect(graph.shortestPath('A', 'A')).toEqual(['A'])
    })

    it('handles disconnected graph (no path exists)', () => {
      const graph = new WeightedGraph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertex('D')
      graph.addEdge('A', 'B', 1)
      graph.addEdge('C', 'D', 1)
      // A-B and C-D are disconnected components

      const result = graph.shortestPath('A', 'D')
      // Should return empty array or array without complete path
      expect(result).not.toContain('D')
    })
  })

  // Path correctness
  describe('path correctness', () => {
    it('returns path in correct order from start to finish', () => {
      const graph = new WeightedGraph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addEdge('A', 'B', 1)
      graph.addEdge('B', 'C', 1)

      const path = graph.shortestPath('A', 'C')
      expect(path[0]).toEqual('A')
      expect(path[path.length - 1]).toEqual('C')
    })

    it('includes both start and finish vertices in path', () => {
      const graph = new WeightedGraph()
      graph.addVertex('X')
      graph.addVertex('Y')
      graph.addVertex('Z')
      graph.addEdge('X', 'Y', 2)
      graph.addEdge('Y', 'Z', 3)

      const path = graph.shortestPath('X', 'Z')
      expect(path).toContain('X')
      expect(path).toContain('Z')
    })

    it('all consecutive vertices in path are connected by edges', () => {
      const graph = new WeightedGraph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertex('D')
      graph.addEdge('A', 'B', 1)
      graph.addEdge('B', 'C', 1)
      graph.addEdge('C', 'D', 1)

      const path = graph.shortestPath('A', 'D')

      // Verify each consecutive pair is connected
      for (let i = 0; i < path.length - 1; i++) {
        const current = path[i]
        const next = path[i + 1]
        const neighbors = graph.adjacencyList[current].map(n => n.node)
        expect(neighbors).toContain(next)
      }
    })
  })
})
