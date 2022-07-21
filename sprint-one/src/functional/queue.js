var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //Create a first counter to keep track of the first element in
  //Create a last counter to keep track of the latest one in
  //Create a size counter to keep track of the queue size
  //Add elements to storage like normal, incrementing/decrementing the first/last counter when necessary
  //to keep track of the elements position in the queue
  //To dequeue, remove the element at storage[first]

  let first = 0;
  let last = 0;
  let queueSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
    queueSize++;
  };

  someInstance.dequeue = function() {
      if (queueSize > 0) {
      let dequeueValue = storage[first];
      delete storage[first];
      first++;
      queueSize--;
      return dequeueValue;
    }
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
