// for i = 1 to n-1
//  j = i
//    while j > 0 and A[j] < A[j-1]
//      swap A[j] with A[j-1]
//      j = j-1

var CArray = require('./CArray');
var c = new CArray(10);

c.insertionSort = function () {
  for (var i = 1; i < this.dataStore.length; i++) {
    j = i;
    while ( j > 0 && this.dataStore[j] < this.dataStore[j - 1]) {
      this.swap(this.dataStore, j , j - 1);
      j--;
    }
  }
}

c.setData();
c.insertionSort()  ;
console.log(c.toString());
