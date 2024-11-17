const isSymmetric = (root) => {
  if (!root) return true;
  return isSame(root.left, root.right);
};

const isSame = (leftroot, rightroot) => {
  if (
    (!leftroot && rightroot) ||
    (leftroot && !rightroot) ||
    (leftroot && rightroot && leftroot.val !== rightroot.val)
  )
    return false;

  if (leftroot && rightroot)
    return (
      isSame(leftroot.left, rightroot.right) &&
      isSame(leftroot.right, rightroot.left)
    );
  return true;
};
