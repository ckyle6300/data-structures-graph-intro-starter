
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (this.adjList[vertex]) return;
    this.adjList[vertex] = [];
  }

  addEdges(srcValue, destValue) {
    if (!this.adjList[srcValue]) this.addVertex(srcValue);
    if (!this.adjList[destValue]) this.addVertex(destValue);

    const val1Vertex = this.adjList[srcValue];
    const val2Vertex = this.adjList[destValue];

    val1Vertex.push(destValue)
    val2Vertex.push(srcValue);
  }

  buildGraph(edges) {
    if (!edges) return;

    edges.forEach(subArr => {
      this.addEdges(subArr[0], subArr[1])
    });

    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    const result = [];
    const queue = [startingVertex];
    const visited = {};
    visited[startingVertex] = true;
    let currentVertex;
    if (!startingVertex) return result;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      });
    }

    return result;
  }





  depthFirstTraversalIterative(startingVertex) {
    const result = [];
    const stack = [startingVertex];
    const visited = {};
    visited[startingVertex] = true;
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    if (visited.has(startingVertex)) return;
    visited.add(startingVertex);
    vertices.push(startingVertex)
    this.adjList[startingVertex].forEach((neighbor) => this.depthFirstTraversalRecursive(neighbor, visited, vertices));
    return vertices;
  }


}

/*
  a: ['b', 'c', 'd'],
    b: ['a', 'c', 'e'],
      c: ['a', 'b', 'f', 'g'],
        d: ['a', 'g'],
          g: ['d', 'c', 'f'],
            e: ['b'],
              f: ['c', 'g']

*/
const edges =
  [['a', 'b'],
  ['a', 'c'],
  ['a', 'd'],
  ['d', 'g'],
  ['b', 'c'],
  ['b', 'e'],
  ['c', 'f'],
  ['c', 'g'],
  ['f', 'g']]

let graph = new Graph();
console.log(graph.buildGraph(edges));
module.exports = {
  Graph
};
