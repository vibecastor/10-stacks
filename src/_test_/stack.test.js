'use strict';

const Stack = require('../lib/stack');

describe('stack.js', () => {
  test('#constructor', () => {
    const testStack = new Stack();
    expect(testStack.head).toBeNull();
  });
  
  test('#push', () => {
    const testStack = new Stack();
    testStack.push(5);
    // console.log(testStack);
    expect(testStack._storage.head.value).toEqual(5);
  });

  // test('#pop', () => {
  //   const testStack = new Stack();
  //   testStack.push(5);
  //   testStack.push(6);
  //   expect(testStack.pop()).toEqual(6);
  // });

  test('#peek', () => {
    const testStack = new Stack();
    testStack.push(5);
    testStack.push(6);
    // console.log(testStack);
    expect(testStack.peek()).toEqual(6);
  });
  
  test('#isEmpty', () => {
    const testStack = new Stack();
    expect(testStack.isEmpty()).toBeTruthy();
  });
});
