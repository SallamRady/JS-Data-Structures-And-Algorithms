class Node{
    constructor(val) {
        this.val = val;
        this.prev = null;
    }
}

class Stack{
    constructor(){
        this.size = 0;
        this.tail = null;
    }
    /**
     * push(val) : Adding a node to the last of stack.
     * complexity -worest case-> O(1)
     * @param {*} val value of node.
     * @returns stack list after add.
     */
    push(val){
        let newNode = new Node(val);
        if(this.size != 0)
            newNode.prev = this.tail;
        
        this.tail = newNode;
        this.size++;
        return this;
    }
    /**
     * top() : Retrive last node in stack.
     * complexity -worest case-> O(1)
     * @returns last node in stack.
     */
    top(){
        if(this.size == 0)
            return false;

        return this.tail;
    }
    /**
     * pop() : Remove last node in stack.
     * complexity -worest case-> O(1)
     * @returns removed node || false.
     */
    pop(){
        if(this.size == 0)
            return  false;
        
        let removedNode = this.tail;
        this.tail = removedNode.prev;
        removedNode.prev = null;
        this.size--;
        return removedNode;
    }
}

let s = new Stack();
console.log(s.push(1));
console.log(s.push(2));
console.log(s.push(3));
console.log(s.push(4));
console.log('---------------------------');
console.log(s.top());
console.log(s.pop());
console.log(s)