var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.last = 0;
  this.queueSize = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(string) {
  this.storage[this.last] = string;
  this.last++;
  this.queueSize++;
}

Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    let value = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    this.queueSize--;
    return value;
  }
}

Queue.prototype.size = function() {
  return this.queueSize;
}

