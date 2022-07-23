

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  node = node.toString();
  for(let key in this.storage) {
    if(key === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let values = Object.values(this.storage[node.toString()]); // get all the values that node has
  // iterate over the values
  for (let i = 0; i < values.length; i++) {
    let index = _.indexOf(this.storage[values[i]], node)
    this.storage[values[i]].splice(index, 1);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let values = Object.values(this.storage[fromNode]);
  return values.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let indexOfToNode = _.indexOf(this.storage[fromNode], toNode) //
  this.storage[fromNode.toString()].splice(indexOfToNode, 1);
  let indexOfFromNode = _.indexOf(this.storage[toNode], fromNode) //
  this.storage[toNode.toString()].splice(indexOfFromNode, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  cb = cb || _.identity;
  for (let key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *Add node is constant time
 *Contains is linear
 *Remove node is linear
 *Add edgeis constant time
 *Remove edge is linear
 *forEachNode is linear
 */


