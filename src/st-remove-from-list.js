const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface*/
  // function ListNode(x) {
  //   this.value = x;
  //   this.next = null;
  // }
 

module.exports =  function removeKFromList(l, k) {
  let coResult = '';
  while (l){
    coResult = `${coResult}${l.value}`
    l = l.next;
  }
  console.log(coResult);

  let result = '';
  for (let i = 0; i < coResult.length; i++) {
    if(coResult[i] !== k.toString()) {
     result = `${result}${coResult[i]}`;
    } else {
      result = result; 
    }
  }
  console.log(result);
  
  let toNum = num => Number(num);
  let resultNum = (Array.from(result, toNum));
  console.log(resultNum);
  
  let tmp;
  
  
  for (let i = resultNum.length - 1; i >= 0; i--){
    tmp = { value: resultNum[i], next:tmp};
    if(i === resultNum.length - 1) {
      tmp = { value: resultNum[i], next: null};        
    }
  }
  console.log(tmp)
  return tmp
}
