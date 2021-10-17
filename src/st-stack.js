const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

 module.exports = class Stack {
  constructor() {
      this.head = null;
      this.length = 0;
  }


  
  getLength() {
    return this.length;
  }

  push(element) {
    let node = {element, next: null}; //creating the node using class Node

    if (this.length === 0) {
        this.head = node; // If there are no nodes 
        // node variable will be the first and head node in the list
    } else {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        current.next = {element, next: null};
    }

    this.length++;
  }

  getNodeByPosition(position) {
    if (position < 0 || position > this.length) { // verification of the specified position value
        return 'Incorrect value of position';
    }

    let current = this.head; // the head of the list
    let index = 0; // the index for incrementation

    while(index < position) {  // goes through each node until the index reaches the position
        current = current.next; // moves the link to the next node of the current node
        index++; // increaments the index
    }

    return current.element;
  }

  removeFromPosition(position) {
    if (position < 0 || position > this.length) { //verification on correct value of position like in the insertInPosition and getNodeByPosition
        return 'Incorrect value of position';
    }

    let current = this.head; // now current is the head of the Linked List

    if (position === 0) {
        this.head = current.next;
    } else {
        let prev = null;
        let index = 0;

        while(index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        prev.next = current.next; 
    }

    this.length--;
    return current.element;
  }
  
  peek() {
    return this.getNodeByPosition(this.getLength() - 1)
  }

  pop() {
    const beforePop = this.getNodeByPosition(this.getLength() - 1)
    this.removeFromPosition(this.getLength() - 1)
    return beforePop
  }



}






