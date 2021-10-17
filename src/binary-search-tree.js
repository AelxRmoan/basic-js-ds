const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
      this.rootP = null;
  }


  root() {
    return this.rootP
  }

  add(data) {
  
    let node = {data, left: null, right: null};
                     
    // root is null then node will
    // be added to the tree and made root.
    if(this.rootP === null)
        this.rootP = node;
    else
 
        // find the correct position in the
        // tree and add the node
        this.insertNode(this.rootP, node);  
  }


  insertNode(node, newNode) {
    if(newNode.data < node.data)
    {
        // if left is null insert node here
        if(node.left === null)
            node.left = newNode;
        else
 
            // if left is not null recur until
            // null is found
            this.insertNode(node.left, newNode);
    }
 
    // if the data is more than the node
    // data move right of the tree
    else
    {
        // if right is null insert node here
        if(node.right === null)
            node.right = newNode;
        else
 
            // if right is not null recur until
            // null is found
            this.insertNode(node.right,newNode);
    }
  }



  has(data) {
    if (this.search(this.rootP, data) === null) {
      return false
    } else {
      return true
    }
  }

  search(node, data)
{
   // if trees is empty return null
    if(node === null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.data)
        return this.search(node.left, data);
 
    // if data is less than node's data
    // move left
    else if(data > node.data)
        return this.search(node.right, data);
 
    // if data is equal to the node data
    // return node
    else
        return node;
}

  find(data) {
    return this.search(this.rootP, data)
  }



  // helper method that calls the
// removeNode with a given data
remove(data)
{
    // root is re-initialized with
    // root of a modified tree.
  this.rootP = this.removeNode(this.rootP, data);
}
 
// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
         
    // if the root is null then tree is
    // empty
    if(node === null)
        return null;
 
    // if data to be delete is less than
    // roots data then move to left subtree
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
 
    // if data to be delete is greater than
    // roots data then move to right subtree
    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
 
    // if data is similar to the root's data
    // then delete this node
    else
    {
         // deleting node with no children
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
 
        // deleting node with one children
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
 
        // Deleting node with two children
        // minimum node of the right subtree
        // is stored in aux
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
 
 }











  findMinNode(node){
    // if left of a node is null
    // then it must be minimum node
    if(node.left === null)
        return node.data;
    else
        return this.findMinNode(node.left);
  }
  findMaxNode(node){
    // if left of a node is null
    // then it must be minimum node
    if(node.right === null)
        return node.data;
    else
        return this.findMaxNode(node.right);
  }

  min() {
    return this.findMinNode(this.rootP)
  }


  max() {
    return this.findMaxNode(this.rootP)
  }

}