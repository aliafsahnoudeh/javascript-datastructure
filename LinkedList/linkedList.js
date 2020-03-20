import Node from './node';
import NoSuchElementException from '../Exceptions/NoSuchElementException';

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
            throw new NoSuchElementException();
        
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
            throw new NoSuchElementException();

        if(this.first === this.last) {
            this.first = this.last = null;
            return;
        }

        let previous = this._getPrevious(this.last);
        this.last = previous;
        this.last.next = null;
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