var BST = require('./BST');

var tree = new BST();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);

// console.log(tree.getValue(25));
tree.remove(25);
