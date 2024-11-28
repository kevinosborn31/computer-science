const validPath = (n, edges, source, destination) => {
    const graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    edges.forEach(([u, v]) => {
        graph.get(u).push(v);
        graph.get(v).push(u); 
    });

    const visited = new Set();
    const stack = [source];

    while (stack.length > 0) {
        const node = stack.pop();

        if (node === destination) return true;

        visited.add(node);

        graph.get(node).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        });
    }

    return false;
};
