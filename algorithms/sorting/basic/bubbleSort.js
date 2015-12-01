// for i = (n-1) to 1
//  for j = 0 to (i-1)
//    if A[j] > A[j-1]
//      swap A[j] with A[j-1]

var CArray = require('./CArray');
var c = new CArray(10);

c.setData();
c.bubbleSort()  ;
console.log(c.toString());
