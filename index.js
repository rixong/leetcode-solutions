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

var rotateRight = function (head, k) {
  if (!head || !k){
    return head;
}

//Find size:
let size = 0;
let node = head;

while (node) {
size++
node = node.next
}

const offset = k % size;  //1

if (offset === 0){
    return head
}

// Break and connect end to head

let newHead;
let tail;
let tailIndex = size - offset - 1;

node = head;

for (let i = 0; i < size; i++) {
if (i === tailIndex) {
  tail = node
  newHead = node.next
}
if (!node.next) {
  node.next = head;
  tail.next = null
}
node = node.next
}
return newHead

}






