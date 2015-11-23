module.exports = function Stack () {
  this.store = [];
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push (elem) {
  this.store.push(elem);
}

function pop () {
  return this.store.pop();
}

function peek () {
  return this.store[this.store.length -1];
}

function clear () {
  this.store.length = 0;
}

function length () {
  return this.store.length;
}


