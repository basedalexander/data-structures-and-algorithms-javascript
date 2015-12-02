// for i = 1; i < n; i = 2i
//  for j = 0; j < (n - i); j = j + 2i
//    Merge(A[j], i, 2i)

var CArray = require('./CArray');
var start, stop, elapsed;
var array = new CArray(1000000);
array.setData();

start = Date.now();
array.mergeSortBU(array.dataStore);
stop = Date.now();
elapsed = stop - start;
console.log("elapsed " + elapsed );
// console.log(array.toString());
