module.exports = {
  NodeSingly: function (name) {
    this.name = name;
    this.next = null;
  },
  NodeDoubly : function (name) {
    this.name = name;
    this.next = null;
    this.prev = null;
  }
}
