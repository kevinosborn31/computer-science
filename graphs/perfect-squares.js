const numSquares = (n) => {
    const queue = [n];
    let level = 0; 

    const visited = new Set();

    while (queue.length > 0) {
        level++; 
        const nextQueue = []; 

        for (const num of queue) {
            for (let i = 1; i * i <= num; i++) {
                const remainder = num - i * i;

                if (remainder === 0) return level;

                if (!visited.has(remainder)) {
                    visited.add(remainder);
                    nextQueue.push(remainder);
                }
            }
        }

        queue.splice(0, queue.length, ...nextQueue);
    }

    return -1; 
};
