const maxDepth = (root) => {
    return calculateNodeDepth(root);
};

const calculateNodeDepth = (node) => {
    if (!node) return 0; 
    
    const leftDepth = calculateNodeDepth(node.left); 
    const rightDepth = calculateNodeDepth(node.right);
    
    return Math.max(leftDepth, rightDepth) + 1; 
};