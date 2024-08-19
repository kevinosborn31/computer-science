function findClosestValueInBst(tree, target) {
    let currentNode = tree;
    let closest = tree.value; 

    while (currentNode !== null) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }

        if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else {
            break; 
        }
    }

    return closest;
}