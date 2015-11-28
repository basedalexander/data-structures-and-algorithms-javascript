module.exports = BST;

var Node = require('./Node');

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.getValue = getValue;
  this.remove = remove;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
    return true;
  } else {
    var current = this.root,
      parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder(node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
}

function preOrder(node) {
  if (node !== null) {
    console.log(node.data);
    this.inOrder(node.left);
    this.inOrder(node.right);
  }
}

function postOrder(node) {
  if (node !== null) {
    this.inOrder(node.left);
    this.inOrder(node.right);
    console.log(node.data);
  }
}

function getMin() {
  var curr = this.root;
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr.data;
}

function getMax() {
  var curr = this.root;
  while (curr.right !== null) {
    curr = curr.right;
  }
  return curr.data;
}

function getValue(value) {
  var curr = this.root;
  while (curr !== null && curr.data != value) {
    if (value < curr.data) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }

    if (curr === null) {
      return null
    }
  }
  return curr;
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has no left child
    if (node.left == null) {
      return node.right;
    }
    // node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  }
  else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  }
  else {
    node.right = removeNode(node.right, data);
    return node;
  }
}
