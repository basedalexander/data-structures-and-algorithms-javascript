// Comparing Array.prototype.sort vs quickSort

var arr = new Array(10000);
fillArray(arr);
var arr1 = arr.slice();
var arr2 = arr.slice();
var start, stop, elapsed;

start = Date.now();
arr1.sort();
stop = Date.now();
elapsed = stop - start;
console.log('Array.prototype.sort : ' + elapsed);

start = Date.now();
qSort(arr2);
stop = Date.now();
elapsed = stop - start;
console.log('quickSort : ' + elapsed);




function fillArray(arr) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] = Math.floor(Math.random() *
      (arr.length + 1));
  }
}

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
