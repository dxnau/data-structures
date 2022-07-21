class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.first = 0;
    this.last = 0;
    this.queueSize = 0;
    this.storage = {};
  }

  enqueue(string) {
    this.storage[this.last] = string;
    this.last++;
    this.queueSize++;
  }

  dequeue() {
    if (this.queueSize > 0) {
      let value = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      this.queueSize--;
      return value;
    }
  }

  size() {
    return this.queueSize;
  }
}
