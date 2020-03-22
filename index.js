import LinkedList from './LinkedLists/Implementation/linkedList'

let linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);

console.log(linkedList.getNthFromEnd(1));

