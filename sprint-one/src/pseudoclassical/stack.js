var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(string) {
  this.storage[this.stackSize] = string;
  this.stackSize++;
}

Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    let poppedValue = this.storage[this.stackSize - 1];
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
    return poppedValue;
  }

}

Stack.prototype.size = function() {
  return this.stackSize;
}

