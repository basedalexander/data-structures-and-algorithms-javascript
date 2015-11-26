var d = require('./Dictionary'),
    fs = require('fs');

var phonesRaw = fs.readFileSync('phones.txt', 'utf8').split('\n');
    phonesRaw.length = phonesRaw.length - 1; // remove trail space

d = new d();

// Added new functions
d.showNum = function (name) {
  console.log(this.data[name]);
}
d.removeNum = function (name) {
  delete this.data[name];
}
d.clearAll = function () {
  for (var key in Object.keys(this.data)) {
    console.log(this.data[key]);
    delete this.data[key];
  }
}


console.log(phonesRaw);
for(i = 0; i < phonesRaw.length; i++) {
  var contact = phonesRaw[i].split(' ');
  d.add(contact[0], contact[1]);
}

d.showNum('Vova');
d.removeNum('Vova');
d.showNum('Vova');
d.show();
console.log('...........');
console.log(d.count());
d.clearAll();
console.log(d.count());
