class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      vertex => vertex !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      vertex => vertex !== vertex1
    )
  }

  depthFirstRecursive(start) {
    const result = []
    const visited = {}

    const dfs = (vertex) => {
      if (!vertex) return null
      if (!this.adjacencyList[vertex]) return null
      visited[vertex] = true
      result.push(vertex)
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) { return dfs(neighbor) }
      })
    }

    dfs(start)

    return result
  }

  depthFirstIterative(start) {
    if (!start) return []
    if (!this.adjacencyList[start]) return []

    const stack = [start]
    const result = []
    const visited = {}

    visited[start] = true
    while (stack.length) {
      const currentVertex = stack.pop()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }
    return result
  }
}

module.exports = Graph