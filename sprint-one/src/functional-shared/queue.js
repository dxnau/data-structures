var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let obj = {
    first: 0,
    last: 0,
    queueSize: 0,
    storage: {}
  }
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(string) {
    this.storage[this.last] = string;
    this.last++;
    this.queueSize++;
  },
  dequeue: function() {
    if (this.queueSize > 0) {
      let value = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      this.queueSize--;
      return value;
    }
  },
  size: function() {
    return this.queueSize;
  }
};


