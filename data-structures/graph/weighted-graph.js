class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    this.values.push({value, priority})
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }

  // Use Dijkstra's algorithm
  shortestPath(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    // to return at end
    let path = []

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    // as long as there is something to visit
    let smallest
    while(nodes.values.length) {
      smallest = nodes.dequeue().value
      if (smallest === finish) {
        // Check if finish is actually reachable
        if (distances[smallest] === Infinity) {
          return []
        }
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        return path.concat(smallest).reverse()
      }
      if (smallest && distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // updating previous (how we got to neighbor)
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    // No path found (disconnected graph)
    return []
  }
}

module.exports = WeightedGraph