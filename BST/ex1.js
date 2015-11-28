// Add a function to the BST class that counts the number of nodes in a BST.
var BST = require('./BST');

var tree = new BST();
tree.countNodes = function () {
  var count = 0;
  countNode(this.root);

  function countNode(node) {
    if (node !== null) {
      count++;
      if (node.left !== null) {
        countNode(node.left);
      }
      if (node.right !== null) {
        countNode(node.right);
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

console.log(tree.countNodes());
