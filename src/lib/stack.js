'use strict';

const LinkedList = require(./linked-list);

class Stack {
  constructor() {
    this._storage = new LinkedList;
  }

  push(value) {
    this._storage.insertAtHead(value);
  }

  pop() {
    this.head = this.head.next;
    return this.head;
  }

  peek() {
    return this.head.value;
  }

  isEmpty() {
    if (!this.head) {
      return true;
    }
    if (this.head) {
      return false;
    }
  }
};

module.exports = Stack;


