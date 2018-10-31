function findClosestValueInBst(tree, target, closest = Infinity) {
  let currentNode = tree
  while (currentNode) {
    if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
      closest = currentNode.value
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    } else break
  }
  return closest
}
