import Node from './node';

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    addFirst(value) {
        if(this.isEmpty())
            return this.initFirstValue(value);

        let newFirst = new Node(value, this.first);  
        this.first = newFirst;
    }

    addLast(value) {
        if(this.isEmpty())
            return this.initFirstValue(value);
        
        let newLast = new Node(value, null);    
        this.last.next = newLast;

        this.last = newLast;
    }

    removeFirst() {
        if(this.isEmpty())
            return;
        
        this.first = this.first.next
    }

    removeLast() {
        if(this.isEmpty())
            return;

        let nextNode = this.first.next;
        if(!nextNode)   return this.first = this.last = null;

        let secondToLast = null;

        while(nextNode.next) {
            secondToLast = nextNode;
            nextNode = nextNode.next;
        }

        secondToLast.next = null;
        this.last = secondToLast;
    }

    contains(value) {
        let nextNode = this.first;
        while(nextNode) {
            if(nextNode.value === value) return true;
            nextNode = nextNode.next;
        }
        return false;
    }

    indexOf(value) {
        let index = -1;
        let nextNode = this.first;
        while(nextNode) {
            index++;
            if(nextNode.value === value) return index;
            nextNode = nextNode.next;
        }
        return -1;
    }

    print() {
        console.log(JSON.stringify(this, null, 4))
    }

    initFirstValue(value) {
        let newNode = new Node(value, null);
        this.first = newNode;
        this.last = newNode;
    }

    isEmpty() {
        if(this.first === null && this.last === null) return true;
        return false;
    }
}

export default LinkedList