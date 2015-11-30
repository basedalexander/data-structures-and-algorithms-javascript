var CArray = require('./CArray');
var c = new CArray(10);

c.selectionSort = function () {
  var min,
      temp;

  for (var outer = 0; outer < this.dataStore.length - 2; outer++) {
    min = outer;
    for (var inner = outer + 1; inner <= this.dataStore.length - 1; inner++) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
    this.swap(this.dataStore, outer, min);
  }
}

c.setData();
c.selectionSort()  ;
console.log(c.toString());
