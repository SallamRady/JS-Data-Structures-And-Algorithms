class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * enqueue(val) : Adding a node to the end of queue.
     * complexity -worest case-> O(1)
     * @param {*} val node value.
     * @returns queue.
     */
    enqueue(val){
        let newNode = new Node(val);
        if(this.size == 0){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.size++;
        return this;
    }
    /**
     * first() : Retrive first node in queue.
     * complexity -worest case-> O(1)
     * @returns first node in queue.
     */
    first(){
        if(this.size == 0) return false;
        return this.head;
    }
    /**
     * dequeue() : remove first node in queue.
     * complexity -worest case-> O(1)
     * @returns removedNode node || false
     */
    dequeue(){
        if(this.size == 0) return false;
        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        this.size--;
        return removedNode;
    }
}

let q = new Queue();
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.enqueue(4));
console.log('--------------');
console.log(q.dequeue());
console.log(q);
console.log('--------------------');
console.log(q.first());
