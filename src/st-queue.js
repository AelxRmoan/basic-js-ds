const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
      this.head = null;
      this.length = 0;
  }


  
  getLength() {
    return this.length;
  }

  insertInPosition(position, value) {
    if (position < 0 || position > this.length) { // returns the warning message 
                                             // if incorrect position was specified
        return 'Incorrect value of position';
    }

    let node = {value, next: null}; // creates the node using class Node

    if (position === 0) { 
        node.next = this.head; 
        this.head = node;
    } else {
        let current = this.head;
        let prev = null;
        let index = 0;

        while (index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        prev.next = node;
        node.next = current;
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

    return current.value;
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
    return current.value;
  }
  
  enqueue(value) {
    this.insertInPosition(this.getLength(), value);
  }

  dequeue() {
    const beforePop = this.getNodeByPosition(0)
    this.removeFromPosition(0)
    return beforePop
  }

  getUnderlyingList() {
    return this.head
  }


}