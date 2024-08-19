class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function evaluateExpressionTree(tree) {
    if (tree.value >= 0) {
      return tree.value;
    }
  
    let leftValue = evaluateExpressionTree(tree.left);
    let rightValue = evaluateExpressionTree(tree.right);
  
    if (tree.value === -1) {
      return leftValue + rightValue;
    }
  
    if (tree.value === -2) {
      return leftValue - rightValue;
    }
  
    if (tree.value === -3) {
      return Math.trunc(leftValue / rightValue);
    }
  
    if (tree.value === -4) {
      return leftValue * rightValue;
    }
  
    return -1;
  }