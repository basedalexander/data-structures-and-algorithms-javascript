/**
 *  time test for shellSort1, mergeSortBU and quickSort with array of sorted elements
 */

var CArray = require('./CArray');
var array, start, stop, elapsed;

/**
 * 100 elements
 */

console.log('\n 100 elements \n ------------');
console.log('- Nums:');

array = new CArray(100);
array.setData();
array.shellSort1();

// shellSort1 nums
start = Date.now();
array.shellSort1();
stop = Date.now();
elapsed = stop - start;
console.log('shellSort1: ' + elapsed);


// mergeSortBU numms
start = Date.now();
array.mergeSortBU();
stop = Date.now();
elapsed = stop - start;
console.log('mergeSortBU: ' + elapsed);

// quickSort nums
start = Date.now();
array.quickSort();
// qSort(array.dataStore);
stop = Date.now();
elapsed = stop - start;
console.log('quickSort: ' + elapsed);

console.log('- Strings:');

array = new CArray(100);
array.setStrings();
array.shellSort1();

// shellSort1 string
start = Date.now();
array.shellSort1();
stop = Date.now();
elapsed = stop - start;
console.log('shellSort1: ' + elapsed);

// mergeSortBU string
start = Date.now();
array.mergeSortBU();
stop = Date.now();
elapsed = stop - start;
console.log('mergeSortBU: ' + elapsed);

// quickSort strings
start = Date.now();
array.quickSort();
// qSort(array.dataStore);
stop = Date.now();
elapsed = stop - start;
console.log('quickSort: ' + elapsed);


/**
 * 1000 elements
 */

console.log('\n 1000 elements \n ------------');
console.log('- Nums:');

array = new CArray(1000);
array.setData();
array.shellSort1();

// shellSort1 nums
start = Date.now();
array.shellSort1();
stop = Date.now();
elapsed = stop - start;
console.log('shellSort1: ' + elapsed);


// mergeSortBU numms
start = Date.now();
array.mergeSortBU();
stop = Date.now();
elapsed = stop - start;
console.log('mergeSortBU: ' + elapsed);

// quickSort nums
start = Date.now();
array.quickSort();
// qSort(array.dataStore);
stop = Date.now();
elapsed = stop - start;
console.log('quickSort: ' + elapsed);

console.log('- Strings:');

array = new CArray(1000);
array.setStrings();
array.shellSort1();

// shellSort1 string
start = Date.now();
array.shellSort1();
stop = Date.now();
elapsed = stop - start;
console.log('shellSort1: ' + elapsed);

// mergeSortBU string
start = Date.now();
array.mergeSortBU();
stop = Date.now();
elapsed = stop - start;
console.log('mergeSortBU: ' + elapsed);

// quickSort strings
start = Date.now();
array.quickSort();
// qSort(array.dataStore);
stop = Date.now();
elapsed = stop - start;
console.log('quickSort: ' + elapsed);

/**
 * 10000 elements
 */

console.log('\n 10000 elements \n ------------');
console.log('- Nums:');

array = new CArray(10000);
array.setData();
array.shellSort1();

// shellSort1 nums
start = Date.now();
array.shellSort1();
stop = Date.now();
elapsed = stop - start;
console.log('shellSort1: ' + elapsed);


// mergeSortBU numms
start = Date.now();
array.mergeSortBU();
stop = Date.now();
elapsed = stop - start;
console.log('mergeSortBU: ' + elapsed);

// quickSort nums
start = Date.now();
array.quickSort();
// qSort(array.dataStore);
stop = Date.now();
elapsed = stop - start;
console.log('quickSort: ' + elapsed);

console.log('- Strings:');

array = new CArray(10000);
array.setStrings();
array.shellSort1();

// shellSort1 string
start = Date.now();
array.shellSort1();
stop = Date.now();
elapsed = stop - start;
console.log('shellSort1: ' + elapsed);

// mergeSortBU string
start = Date.now();
array.mergeSortBU();
stop = Date.now();
elapsed = stop - start;
console.log('mergeSortBU: ' + elapsed);

// quickSort strings
start = Date.now();
array.quickSort();
// qSort(array.dataStore);
stop = Date.now();
elapsed = stop - start;
console.log('quickSort: ' + elapsed);

// /**
//  * 100000 elements
//  */

// console.log('\n 100000 elements \n ------------');
// console.log('- Nums:');

// array = new CArray(100000);
// array.setData();
// array.shellSort1();

// // shellSort1 nums
// start = Date.now();
// array.shellSort1();
// stop = Date.now();
// elapsed = stop - start;
// console.log('shellSort1: ' + elapsed);


// // mergeSortBU numms
// start = Date.now();
// array.mergeSortBU();
// stop = Date.now();
// elapsed = stop - start;
// console.log('mergeSortBU: ' + elapsed);

// // quickSort nums
// start = Date.now();
// array.quickSort();
// // qSort(array.dataStore);
// stop = Date.now();
// elapsed = stop - start;
// console.log('quickSort: ' + elapsed);

// console.log('- Strings:');

// array = new CArray(100000);
// array.setStrings();
// array.shellSort1();

// // shellSort1 string
// start = Date.now();
// array.shellSort1();
// stop = Date.now();
// elapsed = stop - start;
// console.log('shellSort1: ' + elapsed);

// // mergeSortBU string
// start = Date.now();
// array.mergeSortBU();
// stop = Date.now();
// elapsed = stop - start;
// console.log('mergeSortBU: ' + elapsed);

// // quickSort strings
// start = Date.now();
// array.quickSort();
// // qSort(array.dataStore);
// stop = Date.now();
// elapsed = stop - start;
// console.log('quickSort: ' + elapsed);





function qSort(array) {
  if (array.length == 0) {
    return [];
  }

  var pivot = array[0],
    left = [],
    right = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return qSort(left).concat(pivot, qSort(right));
}
