var CArray = require('./CArray');
var c = new CArray(10);

c.setData();
c.selectionSort()  ;
console.log(c.toString());
