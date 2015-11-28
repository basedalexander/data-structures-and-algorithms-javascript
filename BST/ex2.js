// Add a function to the BST class that counts the number of edges in a BST.
var BST = require('./BST');

var tree = new BST();
tree.countEdges = function () {
  var count = 0;
  countEdge(this.root);

  function countEdge(node) {
    if (node !== null) {
      if (!node.left && !node.right) {
        count++;
      }
      if (node.left !== null) {
        countEdge(node.left);
      }
      if (node.right !== null) {
        countEdge(node.right);
      }
    }
  }
  return count;
}


tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);

console.log(tree.countEdges());
