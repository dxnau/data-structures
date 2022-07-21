var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newQueue = Object.create(queueMethods);
  newQueue.first = 0;
  newQueue.last = 0;
  newQueue.queueSize = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  this.storage[this.last] = string;
  this.last++;
  this.queueSize++;
}

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    let value = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    this.queueSize--;
    return value;
  }
}

queueMethods.size = function() {
  return this.queueSize;
}
