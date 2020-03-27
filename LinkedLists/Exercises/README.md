Couple of exercises about linked lists:

1) Implement a linked list (singly) with required methods:
   - addFirst
   - addLast
   - removeFirst
   - removeLast
   - contains
   - size
   - indexOf

   Solution: ../Implementation/linkedList.js

2) Reverse a Linked List in place.
   Solution: reverse method in ../Implementation/linkedList.js

3) Implement a doubly linked list.
4) Implement a circular linked list.

5) Finde the nth node from the end in one pass.
   Hint: Use two pointers, and keep a distance equals to n - 1 between them.
   Solution: getNthFromEnd method in ../Implementation/linkedList.js

6) Find the middle of a linked list in one pass. If the list has an even
number of nodes, there would be two middle nodes. (Note: Assume that
you don’t know the size of the list ahead of time.)
   Hint: Use two pointers, forward first one, 1 step at a time and twice the other. If the second pointer
   is the last return first pointer if second pointer's next is the last return first pointer and it's next node.
   Solution: getMiddleNode method in ../Implementation/linkedList.js
7) Check to see if a linked list has a loop.