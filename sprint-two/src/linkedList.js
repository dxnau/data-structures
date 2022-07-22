// var LinkedList = function() {
//   var list = {};
//   //List = {{}, {}, {}}
//   //List = {{{{{{}}}}}}
//   //List = {head: {value: , next: }, tail: {value: , next: }, value: {value: , next: }, value: {value: , next: }
//   list.head = null;
//   list.tail = null; //list.tail = node
//   let count = 0;

//   list.addToTail = function(value) {
//     let newNode = Node(value);
//     // if the count is not 0
//       // update the previous count 'next' value
//       // add the value to tail
//       // increment count


//     // if list is empty or count is 0
//       // add the value to list with key 'tail' and value 'value'
//     if (list.head === null) {
//       list.head = newNode;
//     }
//  // when tail is not null
//     if (list.tail !== null) {
//       // change the old tail next value to be value
//       // reassign tail to newNode
//       list.tail.next = value;
//       list.tail = newNode;
//     }

//     list.tail = newNode;
//   };

//   list.removeHead = function() {
//     // temp value to storee the old head
//     let temp = list.head;
//     // // delete the value from the list
//     // delete list.head;
//     let target = temp.next;
//     //Loop through list until target is foun
//     for (let key in list) {
//       if (list[key].value === target) {
//         list.head = list[key];
//       }
//     }
//     // set the next value to be the new head
//     // return temp
//     return temp.value;




//   };

//   list.contains = function(target) {
//     for (let key in list) {
//       if (list[key].value === target) {
//         return true;
//       }
//     }
//     return false;
//   };

//   return list;
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail is constant time
 * removeHead is constant time
 *
 */


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; //list.tail = node
  let count = 0;

  list.addToTail = function(value) {
    let newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
 // when tail is not null
    if (list.tail !== null) {
      // change the old tail next value to be value
      // reassign tail to newNode
      list.head.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // temp value to storee the old head
    let temp = list.head;
    list.head = temp.next;
    return temp.value;
  };

  list.contains = function(target, sublist) {
    console.log('----- start of the test -----')
    if (sublist === undefined) {
      sublist = list;
    }

    if (sublist === list) {
      if (list.head.value === target) {
        return true;
      } else if (list.head.next === null) {
        return false;
      } else {
        console.log('this should only be printed once');
        console.log(list.head.next);
        return list.contains(target, list.head.next);
      }
    } else {
      console.log('not the first object');
      console.log(sublist.next);
      if (sublist.value === target) {
        return true;
      } else if (sublist.next === null) {
        return false;
      } else {
        console.log('im in the else statement')
        console.log(sublist.next);
        return list.contains(target, sublist.next);
      }
    }

  };
  console.log(list);
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};