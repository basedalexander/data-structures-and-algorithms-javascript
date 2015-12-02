module.exports = CArray;

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.setStrings = setStrings;
  this.swap = swap;
  this.gaps = [5, 3, 1];
  this.setGaps = setGaps;
  this.shellSort = shellSort;
  this.shellSort1 = shellSort1;
  this.mergeSortBU = mergeSortBU;
  this.quickSort = quickSort;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() *
      (this.numElements + 1));
  }
}

function setStrings () {
  var min = 97,
      max = 122;

  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
  }

  Math.random() * (max - min + 1) + min;
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }
  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function setGaps(arr) {
  this.gaps = arr;
}

function shellSort() {
  for (var g = 0; g < this.gaps.length; ++g) {

    for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
      var temp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] &&
        this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }

  }
}

function shellSort1() {
  var N = this.dataStore.length;
  var h = 1;
  while (h < N / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (var i = h; i < N; i++) {
      for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
        this.swap(this.dataStore, j, j - h);
      }
    }
    h = (h - 1) / 3;
  }
}

function mergeSortBU(arr) {
  arr = arr || this.dataStore;
  if (arr.length < 2) {
    return;
  }
  var step = 1;
  var left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
    }
    step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  k = startRight;
  for (var i = 0; i < (rightArr.length - 1); ++i) {
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  for (var i = 0; i < (leftArr.length - 1); ++i) {
    leftArr[i] = arr[k];
    ++k;
  }
  rightArr[rightArr.length - 1] = Infinity; // a sentinel value
  leftArr[leftArr.length - 1] = Infinity; // a sentinel value
  var m = 0;
  var n = 0;
  for (var k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  // console.log("left array - ", leftArr);
  // console.log("right array - ", rightArr);
}


function quickSort(array) {
  var array = array || this.dataStore;
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
  return quickSort(left).concat(pivot, quickSort(right));
}
