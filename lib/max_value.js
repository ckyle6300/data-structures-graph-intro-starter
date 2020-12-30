function maxValue(node, visited = new Set()) {
    const queue = [node];
    let max = 0;
    maxNode = null;
    visited.add(node);

    while (queue.length) {
        currentNode = queue.shift();
        if (currentNode.val > max) {
            max = currentNode.val
            maxNode = currentNode;
        }
        currentNode.neighbors.forEach((neighbor) => {
            if (!visited.has(neighbor.val)) {
                visited.add(neighbor.val);
                queue.push(neighbor)
            }
        })
    }

    return max;

}



module.exports = {
    maxValue
};