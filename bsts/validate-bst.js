class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    if (tree !== null) {    
      if (tree.left >= tree.value) {
        return false;
      }
      validateBst(tree.left);  
      validateBst(tree.right); 
    }
    return true;
  }