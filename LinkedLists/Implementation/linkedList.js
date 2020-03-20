import Node from './node';
import NoSuchElementException from '../../Exceptions/NoSuchElementException';

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.itemCount = 0;
    }

    addFirst(value) {
        if(this._isEmpty())
            this._initFirstValue(value);
        else {
            let newFirst = new Node(value, this.first);  
            this.first = newFirst;
        }
        this.itemCount++;
    }

    addLast(value) {
        if(this._isEmpty())
            this._initFirstValue(value);
        else {
            let newLast = new Node(value, null);    
            this.last.next = newLast;
    
            this.last = newLast;
        }
        this.itemCount++;
    }

    removeFirst() {
        if(this._isEmpty())
            throw new NoSuchElementException();
        
        if(this.first === this.last) 
            this.first = this.last = null;
        else {
            let second = this.first.next;
            this.first.next = null;
            this.first = second;
        }
        
        this.itemCount--;
    }

    removeLast() {
        if(this._isEmpty())
            throw new NoSuchElementException();

        if(this.first === this.last)
            this.first = this.last = null;
        else {
            let previous = this._getPrevious(this.last);
            this.last = previous;
            this.last.next = null;
        }
        
        this.itemCount--;
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

    // O(1)
    size() {
        return this.itemCount;
    }

    toArray() {
        let array = [];
        let current = this.first;
        while(current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
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

    _getPrevious(node) {
        let current = this.first;
        while(current) {
            if(current.next === node) return current;
            current = current.next;
        }
        return null;
    }
}

export default LinkedList