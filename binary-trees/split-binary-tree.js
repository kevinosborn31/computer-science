class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const splitBinaryTree = (tree) => {
  const desiredSubtreeSum = getTreeSum(tree) / 2;
  const canBeSplit = trySubtrees(tree, desiredSubtreeSum)[1];
  return canBeSplit ? desiredSubtreeSum : 0;
};

const trySubtrees = (tree, desiredSubtreeSum) => {
  if (tree === null) return [0, false];

  const [leftSum, leftCanBeSplit] = trySubtrees(tree.left, desiredSubtreeSum);
  const [rightSum, rightCanBeSplit] = trySubtrees(
    tree.right,
    desiredSubtreeSum
  );

  const currentTreeSum = tree.value + leftSum + rightSum;
  const canBeSplit =
    leftCanBeSplit || rightCanBeSplit || currentTreeSum === desiredSubtreeSum;
  return [currentTreeSum, canBeSplit];
};

const getTreeSum = (tree) => {
  if (tree === null) return 0;
  return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right);
};
