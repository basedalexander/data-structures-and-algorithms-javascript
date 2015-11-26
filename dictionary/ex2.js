var d = require('./Dictionary'),
    d = new d();

var text = 'the brown fox jumped over the blue fox',
    words = text.split(' ');

// Rewrite add function in order to solve the problem
d.add = function (name) {
  if (this.data[name]) {
    this.data[name]++;
    return;
  }
  this.data[name] = 1;
}


for (var i = 0; i < words.length; i++) {
  d.add(words[i]);
}


d.show();
