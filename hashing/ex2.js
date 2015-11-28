var fs = require('fs'),
    table = require('./hashtable'),
    table = new table(),
    rl = require("readline"),
    prompts = rl.createInterface(process.stdin, process.stdout);

/**
 *  Customizing original Hashtable class
 */
table.keys = new Array(137);
for (var i = 0; i < table.keys.length; i++) {
  table.keys[i] = [];
}

table.put = function (key, value) {
  var pos = this.betterHash(key),
  i = 0;

  while (this.keys[pos][i] != undefined) {
    i = i + 2;
  }
  this.keys[pos][i] = key;
  this.keys[pos][i + 1] = value;
};

table.get = function (key) {
  var pos = this.betterHash(key),
      row = this.keys[pos],
      i,
      len = row.length;

  for (i = 0; i < len; i = i + 2) {
    if (row[i] == key) {
      return row[i + 1];
    }
  }
  return undefined;
};
/* End */


words = fs.readFileSync('words.txt', 'utf8').split('\n');
words.length = words.length - 1;

putWords(words);

function putWords (words) {
  for (var i = 0; i < words.length; i++) {
    var split = words[i].split(' ');
    table.put(split[0], split[1]);
  }
}

// Prompting user for words
prompts.question("Type word : ", function (input) {
    var translate = table.get(input);
    console.log('Word was : ' + input + ' ---> ' + translate);
    process.exit();
});


