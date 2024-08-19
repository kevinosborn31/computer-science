function nodeDepths(root) {
    return calculateNodeDepth(0, root);
  }
  
  function calculateNodeDepth(currentDepth, node) {
    if (!node) return 0;
    
    const sum = currentDepth + 
                calculateNodeDepth(currentDepth + 1, node.left) + 
                calculateNodeDepth(currentDepth + 1, node.right);
    
    return sum;
  }
  
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }