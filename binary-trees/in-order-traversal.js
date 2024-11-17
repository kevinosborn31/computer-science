const inorderTraversal = (root) => {
    const values = [];
    getBranchValues(root, values);
    return values;
};

const getBranchValues = (node, values) => {
    if (node !== null) {
        getBranchValues(node.left, values);

        values.push(node.val);

        getBranchValues(node.right, values);
    }
};