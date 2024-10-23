const kthLargestLevelSum = (root, k) => {
  if (!root) return -1;

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let numberOfNodes = queue.length;
    let sum = 0;

    for (let i = 0; i < numberOfNodes; i++) {
      let node = queue.shift();
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(sum);
  }

  if (k > result.length) return -1;

  result.sort((a, b) => b - a);

  return result[k - 1];
};
