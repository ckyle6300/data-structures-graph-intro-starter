function numRegions(graph) {
    let counter = 0;
    const visited = new Set();

    for (let node in graph) {
        if (depthFirst(node, visited, graph)) {
            counter++
        }
    }
    return counter;
}

function depthFirst(startNode, visited = new Set(), graph) {
    if (visited.has(startNode)) return;
    visited.add(startNode);

    graph[startNode].forEach(neighbor => {
        depthFirst(neighbor, visited, graph);
    })

    return true;
}


module.exports = {
    numRegions
};