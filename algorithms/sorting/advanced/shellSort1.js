// Robert Sedgewick, coauthor of Algorithms, 4E (Addison-Wesley), defines a shell
// sort() function that uses a formula to dynamically compute the gap sequence to use
// with Shellsort
// shellsort() with a dynamically computed gap sequence
var CArray = require('./CArray');
var start, stop, elapsed;
var array = new CArray(1000000);
array.setData();

start = Date.now();
array.shellSort1();
stop = Date.now();
elapsed = stop - start;
console.log("elapsed " + elapsed );
