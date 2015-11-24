var LList = require('./LList'),
    Node  = require('./Node');

var list = new LList();
list.insert('bread', 'head');
list.insert('cheese', 'bread');
list.display();
list.remove('cheese');
console.log('...................................');
list.display();
