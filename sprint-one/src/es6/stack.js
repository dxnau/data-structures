class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stackSize = 0;
    this.memory = {};
  }

  push(string) {
    this.memory[this.stackSize] = string;
    this.stackSize++;
  }

  pop() {
    if (this.stackSize > 0) {
      let value = this.memory[this.stackSize - 1];
      delete this.memory[this.stackSize - 1];
      this.stackSize--;
      return value;
    }
  }

  size() {
    return this.stackSize;
  }
}