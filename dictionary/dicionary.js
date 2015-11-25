"use strict";

function Dictionary () {
  this.data = [];
  this.add = add;
  this.remove = remove;
  this.find = find;
  this.show = show;
  this.count = count;
}


function add (key, number) {
  this.data[key] = number;
}

function remove (key) {
  delete this[key];
}

function find (key) {
  return this.data[key];
}

function count () {
  var n = 0,
      key;

  for (key in Object.keys(this.data)) {
    n++;
  }

  return n;
}

function show () {
  var key,
  sorted = Object.keys(this.data).sort();
  for (key in sorted) {
    console.log(sorted[key] + ' : ' + this.data[sorted[key]]);
  }
}


var pbook = new Dictionary();

pbook.add('Vasya', 123);
pbook.add('Gena', 456);
pbook.add('John', 252);
pbook.show();
console.log('count : ' + pbook.count());
