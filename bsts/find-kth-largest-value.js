class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findKthLargestValueInBst = (tree, k) => {
  const sortedNodeValues = [];
  inOrderTraverse(tree, sortedNodeValues);
  return sortedNodeValues[sortedNodeValues.length - k];
}

const inOrderTraverse = (node, sortedNodeValues) => {
  if (node === null) return;

  inOrderTraverse(node.left, sortedNodeValues);
  sortedNodeValues.push(node.value);
  inOrderTraverse(node.right, sortedNodeValues);
}
