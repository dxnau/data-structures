var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //Keep track of the stack size
  let stackSize = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    //Add value being pushed to storage with an index key
    storage[stackSize] = value;
    //Stack size can only increase if something is added to storage
    stackSize++;
  };

  someInstance.pop = function() {
    if (stackSize > 0) {
      //Keep track of what the newest value is
      let poppedValue = storage[stackSize - 1];
      //Remove that property from storage
      delete storage[stackSize - 1];
      stackSize--;
      return poppedValue;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
