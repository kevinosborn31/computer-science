const cloneGraph = (node) => {
    if (!node) return null;

    const visited = new Map();
    
    const dfs = (current) => {
    if (visited.has(current)) {
        return visited.get(current);
    }

    const clone = new Node(current.val);
    visited.set(current, clone);

    for (const neighbor of current.neighbors) {
        clone.neighbors.push(dfs(neighbor));
    }

    return clone;
};

    return dfs(node);
};
