// for i = (n-1) to 1
//  for j = 0 to (i-1)
//    if A[j] > A[j-1]
//      swap A[j] with A[j-1]

var CArray = require('./CArray');
var c = new CArray(10);

c.bubbleSort = function () {
  var numElements = this.dataStore.length,
      temp;
  for (var outer = numElements; outer >= 2; outer--) {
    for (var inner = 0; inner <= outer - 1; inner++) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        this.swap(this.dataStore, inner, inner + 1);
      }
    }
  }
}

c.setData();
c.bubbleSort()  ;
console.log(c.toString());
