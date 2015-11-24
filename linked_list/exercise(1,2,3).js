var Dllist = require('./Doubly');
var mocha = require('mocha');
var expect = require('chai').expect;

var list = new Dllist();

describe("test", function() {
  it("should behave...", function() {
    expect(list.current.name).toBe('head');
  });
});
