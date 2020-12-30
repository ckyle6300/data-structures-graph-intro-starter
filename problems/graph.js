
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
    const queue = [];


    if (!startingVertex) return result;


  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}


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









