module.exports = Graph;


function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
  }
  this.addEdge = addEdge;
  this.toString = toString;
  this.showGraph = showGraph;
  this.showVisited = showVisited;
  this.dfs = dfs;
  this.bfs = bfs;
  this.visited = [];
  for (i = 0; i < this.vertices; i++) {
    this.visited[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (var i = 0; i < this.vertices; i++) {
    console.log(i + ' --> ');
    for (var j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] != undefined) {
        console.log(this.adj[i][j] + ' ');
      }
    }
  }
}

function dfs (v) {
  var vertex = this.adj[v],
      i,
      len = vertex.length;

  this.visited[v] = true;
  console.log("Visited: " + v);

  for (i = 0; i < len; i++) {
    var vx = vertex[i];

    // Vertex is not visited
    if (!this.visited[vx]) {
      this.dfs(vx);
    }
  }
}

function bfs (v) {
  var queue = [];
  queue.push(v);

  var count = 0;

  while (queue.length > 0){
    // console.log(++count);
    var vrx = queue.shift();
    this.visited[vrx] = true;

    for (var i = 0; i < this.adj[vrx]; i++)  {
      this.visited[this.adj[vrx][i]] = true;
      queue.push(this.adj[vrx][i]);
    }
  }
  this.showVisited();
}

function showVisited () {
  for (var i = 0; i < this.visited.length; i++) {
    if (this.visited[i]) {
      console.log('visited: ' + i);
    }
  };
}
