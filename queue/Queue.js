module.exports = Queue;

function Queue () {
  this.data = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.isEmpty = isEmpty;
}

function enqueue (elem) {
  this.data.push(elem);
}
function dequeue () {
  return this.data.shift();
}

function front () {
  return this.data[0];
}
function back () {
  return this.data[this.data.length - 1];
}

function toString () {
  return this.data;
}

function isEmpty () {
  return !!this.data.length;
}
