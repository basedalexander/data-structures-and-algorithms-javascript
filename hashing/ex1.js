var fs = require('fs'),
    table = require('./hashtable'),
    table = new table();

var words = fs.readFileSync('words.txt', 'utf8').split('\n');
    words.lenght = words.length - 1;

// ...
