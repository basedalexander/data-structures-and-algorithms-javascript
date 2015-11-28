// Write a program that stores the words from a large text file in a BST and displays
// the number of times each word occurs in the text.

var BST = require('./BST'),
  fs = require('fs');
var abc = ':.,\n()[]/';

var words = fs.readFileSync('largeText.txt', 'utf8').split(' ');

var tree = new BST();

tree.inOrder = function inOrder(node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.data + ': ' + node.count);
    this.inOrder(node.right);
  }
}

tree.update = function (node) {
  node.count++;
}

tree.addWord = function (word) {
  var n = this.getValue(word);
  if (n === null) {
    this.insert(word);
  } else {
    this.update(n);
  }
}


function insertWords(words) {
  var i,
    len = words.length;
  for (i = 0; i < len; i = i + 1) {
    tree.addWord(words[i]);
  }
}

insertWords(words);
tree.inOrder(tree.root);
