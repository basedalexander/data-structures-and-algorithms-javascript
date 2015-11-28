module.exports = HashTable;

function HashTable() {
  this.data = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
}

function put(data) {
  var pos = this.betterHash(data);
  this.data[pos] = data;
}

function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  console.log("Hash value: " + data + " -> " + total);
  return total % this.data.length;
}


function showDistro() {
  var n = 0;
  for (var i = 0; i < this.data.length; ++i) {
    if (this.data[i] != undefined) {
      console.log(i + ": " + this.data[i]);
    }
  }
}


function betterHash(string) {
  const H = 37;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.data.length;
  if (total < 0) {
    total += this.data.length - 1;
  }
  return parseInt(total);
}

function get (key) {
  var pos = betterHash(key);

  if (this.data[pos] == undefined) {
    return undefined;
  }

  return this.data[pos];
}
