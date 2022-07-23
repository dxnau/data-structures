

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail is linear
 * removeHead is constant time
 * contains is linear
 */


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  let count = 0;

  list.addToTail = function(value) {
    let newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      let currentNode = list.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    let temp = list.head;
    list.head = temp.next;
    return temp.value;
  };

  list.contains = function(target, sublist) {
    if (sublist === undefined) {
      sublist = list;
    }

    if (sublist === list) {
      if (list.head.value === target) {
        return true;
      } else if (list.head.next === null) {
        return false;
      } else {
        return list.contains(target, list.head.next);
      }
    } else {
      if (sublist.value === target) {
        return true;
      } else if (sublist.next === null) {
        return false;
      } else {
        return list.contains(target, sublist.next);
      }
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};