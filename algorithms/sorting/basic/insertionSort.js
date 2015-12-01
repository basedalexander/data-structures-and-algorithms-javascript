// for i = 1 to n-1
//  j = i
//    while j > 0 and A[j] < A[j-1]
//      swap A[j] with A[j-1]
//      j = j-1

var CArray = require('./CArray');
var c = new CArray(10);

c.setData();
c.insertionSort()  ;
console.log(c.toString());
