var CArray = require('./CArray');
var array = new CArray(1000000);
array.setData();

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



var start, stop, elapsed;

start = Date.now();
qSort(a);
stop = Date.now();
elapsed = stop - start;
console.log('elapsed ' + elapsed);
