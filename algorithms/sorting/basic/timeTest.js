/**
 * Basic time test for bubblesort, selectionsort and insertionsort
 */

var CArray = require('./CArray');
var array, start, stop, elapsed;

/**
 * 100 elements
 */

console.log('\n 100 elements \n ------------');

// bubbleSort
array = new CArray(100);
array.setData();
start = Date.now();
array.bubbleSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);

// selectionSort
array = new CArray(100);
array.setData();
start = Date.now();
array.selectionSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);

// insertionSort
array = new CArray(100);
array.setData();
start = Date.now();
array.insertionSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);


/**
 * 1000 elements
 */

console.log('\n 1000 elements \n ------------');

// bubbleSort
array = new CArray(1000);
array.setData();
start = Date.now();
array.bubbleSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);

// selectionSort
array = new CArray(1000);
array.setData();
start = Date.now();
array.selectionSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);

// insertionSort
array = new CArray(1000);
array.setData();
start = Date.now();
array.insertionSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);


/**
 * 10000 elements
 */


console.log('\n 10000 elements \n -------------');

// bubbleSort
array = new CArray(10000);
array.setData();
start = Date.now();
array.bubbleSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);

// selectionSort
array = new CArray(10000);
array.setData();
start = Date.now();
array.selectionSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);

// insertionSort
array = new CArray(10000);
array.setData();
start = Date.now();
array.insertionSort();
stop = Date.now();
elapsed = stop - start;
console.log('elapsed : ' + elapsed);
