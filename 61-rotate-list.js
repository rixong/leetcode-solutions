/*
61. Rotate List

Given a linked list, rotate the list to the right by k places, where k is non-negative.

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL

Pseudo Code:

- Find size/length of list O(n)
- calculate new tail node: length - (k % length) - 1.
- break at new end. O(n)
- connect old end to old beginning.

*/

// var rotateRight = function (head, k) {
//   if (!head || !k){
//     console.log('here')
//     return head;
// }

// //Find size:
// let size = 0;
// let node = head;

// while (node) {
// size++
// node = node.next
// }

// const offset = k % size;  //1

// if (offset === 0){
//     return head
// }

// // Break and connect end to head

// let newHead;
// let tail;
// let tailIndex = size - offset - 1;

// node = head;

// for (let i = 0; i < size; i++) {
// if (i === tailIndex) {
//   tail = node
//   newHead = node.next
// }
// if (!node.next) {
//   node.next = head;
//   tail.next = null
// }
// node = node.next
// }
// return newHead

// }


if (!head || !head.next || k===0){
  return head;
}

//Find size and connect Tail to Head:

let size = 0;
let node = head;

while (true) {
size++
if(node.next){
  node = node.next
} else {
  if (k % size === 0 ){
      return head;
  } else {
      node.next = head
      break;
  }

}
}

const offset = k % size; 

// Break new tail

let newHead;
let tailIndex = size - offset - 1;

node = head;

for (let i = 0; i < size; i++) {
if (i === tailIndex) {
newHead = node.next
node.next = null
return newHead
}
node = node.next;
}



