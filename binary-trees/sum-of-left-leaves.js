const sumOfLeftLeaves = (root) => {
    if (!root) return 0; 
    
    let sum = 0;
    
    getSumOfLeftLeaves(root);
    return sum;
};

const getSumOfLeftLeaves = (node) => {
    if (!node) return;
    
    if (node.left && !node.left.left && !node.left.right) {
        sum += node.left.val; 
    }
    
    getSumOfLeftLeaves(node.left);
    getSumOfLeftLeaves(node.right);
}
