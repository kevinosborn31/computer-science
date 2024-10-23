const dfs = (array) => {
  if (array.length == 0) return;

  let sum = 0;

  for (let node of array) {
    if (!node) continue;
    if (node.left) sum += node.left.val;
    if (node.right) sum += node.right.val;
  }

  let childArr = [];

  for (let node of array) {
    let curSum = 0;

    if (node.left) curSum += node.left.val;
    if (node.right) curSum += node.right.val;

    if (node.left) {
      node.left.val = sum - curSum;
      childArr.push(node.left);
    }
    if (node.right) {
      node.right.val = sum - curSum;
      childArr.push(node.right);
    }
  }

  dfs(childArr);
};

const replaceValueInTree = (root) => {
  root.val = 0;
  dfs([root]);

  return root;
};
