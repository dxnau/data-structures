var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
   let childNode = treeNode(value);
   this.children.push(childNode);
   _.extend(childNode, treeMethods);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  let hasTarget = false;
  function searchTree(target, childrenObj) {
    if(childrenObj.value === target) {
      hasTarget = true;
    } else {
      for (let i = 0; i < childrenObj.children.length; i++) {
        searchTree(target, childrenObj.children[i]);
      }
    }
  }
  searchTree(target, this);
  return hasTarget;
};

var treeNode = function(value) {
  var node = {};

  node.value = value;
  node.children = [];

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Add child is constant
 * Contains is linear
 */
