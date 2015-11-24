var Node = require('./Node').NodeDoubly;

module.exports = Doubly;

function Doubly() {
  this.head = new Node('head');
  this.current = head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.advance = advance;
  this.back = back;
}


function find(elem) {
  var currentNode = this.head;
  while (currentNode.name != elem) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function insert(node, after) {
  var newNode = new Node(node),
    currentNode = this.find(after);

  // Node not found
  if (!currentNode) {
    return false;
  }

  newNode.next = currentNode.next;
  currentNode.next = newNode;
}

function display () {
  var currentNode = this.head;
  while (currentNode.next != null) {
    console.log(currentNode.next.name);
    currentNode = currentNode.next;
  }
}


function remove (name) {
  var prevNode = this.findPrev('cheese');
  prevNode.next = prevNode.next.next;
}


function advance (n) {
  var i;
  for (i = 0; i < n; i++) {
    if (this.current.next == null) {
      console.log('Can\'t be moved forward');
      return this.current;
    }
    this.current = this.current.next;
  }
  return current;
}

function back (n) {
  var i;

  for (i = 0; i < n; i++) {
    if (this.current.prev == null) {
      console.info('can\'t be moved back');
      return this.current;
    }
    this.current = this.current.prev;
  }

  return this.current;
}
