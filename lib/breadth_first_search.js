function breadthFirstSearch(startingNode, targetVal) {
    const queue = [startingNode];
    const visited = {};
    visited[startingNode.val] = true;

    while (queue.length) {
        let currentNode = queue.shift();
        console.log(visited);
        if (currentNode.val === targetVal) {
            return currentNode;
        }

        currentNode.neighbors.forEach(neighbor => {
            if (!visited[neighbor.val]) {
                visited[neighbor.val] = true;
                queue.push(neighbor);
            }
        })

    }
    return null;
}


module.exports = {
    breadthFirstSearch
};