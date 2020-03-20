import Node from './node';

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    addFirst(value) {
        if(this._isEmpty())
            return this._initFirstValue(value);

        let newFirst = new Node(value, this.first);  
        this.first = newFirst;
    }

    addLast(value) {
        if(this._isEmpty())
            return this._initFirstValue(value);
        
        let newLast = new Node(value, null);    
        this.last.next = newLast;

        this.last = newLast;
    }

    removeFirst() {
        if(this._isEmpty())
            return;
        
        if(this.first === this.last) {
            this.first = this.last = null;
            return;
        }
        
        let second = this.first.next;
        this.first.next = null;
        this.first = second;
    }

    removeLast() {
        if(this._isEmpty())
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

    contains(item) {
        return this.indexOf(item) !== -1;
    }

    indexOf(item) {
        let index = 0;
        let current = this.first;
        while(current) {
            if(current.value === item) return index;
            index++;
            current = current.next;
        }
        return -1;
    }

    print() {
        console.log(JSON.stringify(this, null, 4))
    }

    _initFirstValue(value) {
        let newNode = new Node(value, null);
        this.first = newNode;
        this.last = newNode;
    }

    _isEmpty() {
        if(this.first === null && this.last === null) return true;
        return false;
    }
}

export default LinkedList