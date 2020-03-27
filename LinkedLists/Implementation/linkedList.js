import Node from './node';
import NoSuchElementException from '../../Exceptions/NoSuchElementException';
import IllegalArgumentException from '../../Exceptions/IllegalArgumentException';

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.itemCount = 0;
    }

    // O(1)
    addFirst(value) {
        if(this._isEmpty())
            this._initFirstValue(value);
        else {
            let newFirst = new Node(value, this.first);  
            this.first = newFirst;
        }
        this.itemCount++;
    }

    // O(1)
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

    // O(1)
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

    // O(n)
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

    // O(n)
    contains(item) {
        return this.indexOf(item) !== -1;
    }

    // O(n)
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

    // O(n)
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
        console.log(JSON.stringify(this, null, 4));
    }

    // O(n)
    reverse() {
        let current = this.first;
        let previous = null;
        this.last = this.first;
        
        while(current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.first = previous;
    }

    // O(n)
    getNthFromEnd(n) {
        if(n > this.itemCount)
            throw new IllegalArgumentException();

        let firstPointer = this.first;
        let secondPointer = this.first;
        let distance = 0;

        let current = this.first;  

        while(current.next) {
            secondPointer = current.next;
            distance++;

            current = current.next;
            if(distance >= n) {
                firstPointer = firstPointer.next;
                distance--;
            }
        }

        if(distance === n - 1) return firstPointer.value;
        else return null;
    }

    // O(n)
    getMiddleNode() {
        if(this._isEmpty())
            throw new NoSuchElementException();
        
        let middlePointer = this.first;
        let endPointer = this.first;

        while (endPointer !== this.last && endPointer.next !== this.last) {
            endPointer = endPointer.next.next;
            middlePointer = middlePointer.next;
        }

        if (endPointer === this.last)
            return middlePointer.value;
        else
            return [middlePointer.value, middlePointer.next.value];
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