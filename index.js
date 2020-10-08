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

iterate b x's adding end to beginning and setting new end to point to null.
OR
set end node to point to head node (circular list) and advance. Break the chain after advancing n nodes.
OR
Calculate new last node by subtracting n from length.
- calculate length - O(n)
- calculate new end: n % length.
- break at new end. - O(n)
- connect old end to old beginning.

*/

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//       this.head = null;
//   }
//   insertFirst(data) {
//       this.head = new Node(data, this.head);
//   }

//   insertLast(data) {
//     const node = new Node(data);
//     const last = this.getLast();
//     last ? last.next = node : this.head = node
//   }

//   getLast() {
//     if (!this.head) {
//       return null
//     }
//     let node = this.head;
//     while (node) {
//       if (!node.next) {
//         return node
//       }
//       node = node.next;
//     }
//   }

//   size() {
//     let node = this.head;
//     let counter = 0;
//     while (node) {
//       counter++;
//       node = node.next;
//     }
//     return counter;
//   }

// }

var rotateRight = function (head, k) {
  //Find size:
  let size = 0;
  let node = head;
  while (node) {
    size++
    node = node.next
  }
  const endNode = k % size;

  // Break and connect end to head
  node = head;   //i = 0    endNode = 2
  for (let i = 0; i < size; i++) {
    if (i = endNode) {
      tail = node
      newHead = node.next
    }
    if (!node.next) {
      node.next = head;
      tail.next = null
    }
    node = node.next
  }
  return newhead

}






