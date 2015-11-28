// Write a program using hashing that reads a text file and compiles a list of the words
// in the file with the number of times each word appears in the file.
//
var table = require('./hashtable'),
    table = new table(),
    fs = require('fs');

var text = fs.readFileSync('text.txt', 'utf8').trim(),
    text = text.split(' ');

// Changing hashtable's methods
table.values = [];

table.put = function (key) {
  var pos = this.betterHash(key);
  if (this.data[pos] == undefined) {
    this.data[pos] = key;
    this.values[pos] = 1;
  }
  else {
    while (this.data[pos] != undefined && this.data[pos] != key) {
      pos++;
    }
    this.values[pos] += 1;
  }
};

table.showAll = function () {
  for (var i = 0; i < this.data.length; i++) {
    if (this.data[i] != undefined) {
      console.log(this.data[i] + ' ----> '  + this.values[i]);
    }
  }
}

// End changing

function putText (text) {
  for (var i = 0; i < text.length; i++) {
    table.put(text[i]);
  }
}

putText(text);
table.showAll();
