var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(string) {
  this.storage[this.stackSize] = string;
  this.stackSize++;
}

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    let poppedValue = this.storage[this.stackSize - 1];
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
    return poppedValue;
  }
}

stackMethods.size = function() {
  return this.stackSize;
}
