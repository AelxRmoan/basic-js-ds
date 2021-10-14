// class Node {
//   constructor(value) {
//       this.value = value;
//       this.next = null;
//   }
// }

class Stack {
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
// class Stack {
//   constructor(){
//     this.head = null;
//   }
//   push(element) {
//     const node = {element, next:this.head}
//     this.head = node;
//     console.log(this.head)
//    }
  

//   peek() {
//     console.log(this.head.element)
//     return this.head.element;
//   } 

//   pop() {
//     let tailVar = this.head;
//     let node = this.head;
//     const findBeforeLast = () => {
//       while(node){
//         console.log(node)
//         if (node.next === undefined)
//         return node
//       }
//       console.log(node)
//     };

//     if(this.head === undefined){
//       findBeforeLast()
//       console.log(node);
//       return this.head = node 
//     } else {
//       this.head = undefined
//       console.log(tailVar.element);
//       return tailVar.element
//     }
//   }

//   first() {
//     if (!this.head) {
//     return null;
//     }
//     let node = this.head;
//     while (node) {
//      if (!node.next) {
//       return node;
//      }
//     node = node.next; 
//    }
//   }
// }

  const stack = new Stack();
  console.log(stack.push(5))
  console.log(stack.push(6))
  console.log(stack.push(7))
  console.log(stack.peek())
  console.log(stack.pop())
  console.log(stack.peek())
  console.log(stack)
