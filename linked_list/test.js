var LList = require('./LList');

var list = new LList();
list.insert('bread', 'head');
list.insert('cheese', 'bread');
list.insert('mac', 'cheese');
list.insert('salade', 'mac');
list.insert('milk', 'salade');
list.display();
list.remove('cheese');
console.log('...................................');
console.log(list.advance(2).name);
