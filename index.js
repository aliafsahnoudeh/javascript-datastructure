import LinkedList from './LinkedLists/Implementation/linkedList'

let linkedList = new LinkedList();
linkedList.addLast(2);
linkedList.addLast(1);

// linkedList.removeLast();
linkedList.addLast(3);
linkedList.addLast('4');


console.log(linkedList.toArray());

