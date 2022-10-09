class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
/**
 * class : DoublyLinkedList
 * **** Proberities ****
 * length -> length of linked list.
 * head -> pointer refer to first node in linked list.
 * tail -> pointer refer to last node in linked list.
 * **** Methods ****
 * 1. push(val) : Adding a node to the end of the Doubly Linked List.
 * 2. pop() : Removing a node from the end of the Doubly Linked List.
 * 3. shift() : Removing a node from the beginning of the Doubly Linked List.
 * 4. unshift(val) : Adding a node to the begin of the Doubly Linked List.
 * 5. getByIndex(index) : retriving node from doubly linked list according it's index/postion [0-based].
 * 6. setNodeValueByIndex(index, value) : Changing the value of a node based on it's index/position in the Double Linked List
 * 7. insert(index, value) : Adding a node to the Double Linked List at a specific position
 * 8. remove(index) : Removing a node from the DoublyLinked List at a specific index/position
 * 
 */
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * push(val) : Adding a node to the end of the Doubly Linked List
   * complexity -worest case-> O(1) 
   * @param {*} val refer to nodde value.
   * @returns list
   */
  push(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /**
   * pop() : Removing a node from the end of the Doubly Linked List.
   * complexity -worest case-> O(1)
   * @returns removed node || false if there is no nodes.
   */
  pop() {
    if (this.length == 0) return false;
    let removedNode = this.tail;
    if (this.length == 1) {
      this.tail = null;
      this.head = null;
      this.length = 0;
      return removedNode;
    }
    this.tail = removedNode.prev;
    this.tail.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  /**
   * shift() : Removing a node from the beginning of the Doubly Linked List.
   * complexity -worest case-> O(1)
   * @returns
   */
  shift() {
    if (this.length == 0) return false;
    let removedNode = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }
    this.head = removedNode.next;
    this.head.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
  /**
   * unshift(val) : Adding a node to the begin of the Doubly Linked List.
   * complexity -worest case-> O(1)
   * @param {*} val refer to nodde value.
   * @returns list
   */
  unshift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  /**
   * getByIndex(index) : retriving node from doubly linked list according it's index/postion [0-based].
   * complexity -worest case-> O(n)
   * @param {*} index refer to node's index/postion [0-based].
   * @returns specific node.
   */
  getByIndex(index) {
    if (index < 0 || index >= this.length) return false;

    let mid = Math.floor(this.length / 2);
    let node,
      counter = 0;
    if (index >= mid) {
      node = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        node = node.prev;
        counter--;
      }
    } else {
      node = this.head;
      while (counter !== index) {
        node = node.next;
        counter++;
      }
    }
    return node;
  }
  /**
   * Changing the value of a node based on it's index/position in the Double Linked List.
   * complexity -worest case-> O(n)
   * @param {*} index refer to position [0-based]
   * @param {*} value the data of node
   * @returns true if done otherwise false.
   */
  setNodeValueByIndex(index, value) {
    let node = this.getByIndex(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  
  /**
   * insert : Adding a node to the Double Linked List at a specific position
   * complexity -worest case-> O(n)
   * @param {*} index refer to position [0-based]
   * @param {*} value the data of node
   * @returns 
   */
  insert(index, val) {
    if(index < 0 || index >= this.length) return false;
    if(index == 0) return this.unshift(val);
    if(index == this.length-1) return this.push(val);

    let newNode = new Node(val);
    let node = this.getByIndex(index);
    let next = node.next;
    let previous = node.prev;

    newNode.prev = previous;
    previous.next = newNode;
    newNode.next = node;
    node.prev = newNode;
    
    this.length++;
    return true;
  }
  /**
   * remove : Removing a node from the DoublyLinked List at a specific index/position
   * complexity -worest case-> O(n)
   * @param {*} index refer to position [0-based].
   * @returns removed node.
   */
  remove(index){
    if(index < 0 || index >= this.length) return false;
    if(index == 0) return this.shift();
    if(index == this.length-1) return this.pop();

    let removedNode = this.getByIndex(index);
    let previous = removedNode.prev;
    let next = removedNode.next;
    
    previous.next = next;
    next.prev = previous;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  print() {
    if (this.length == 0) return [];

    let node = this.head,
      arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(node.val);
      node = node.next;
    }

    return arr.join(' , ');
  }
}
//test
let l = new DoublyLinkedList();
// l.push(1);
// l.push(2);
// l.push(3);
// l.push(4);
// console.log(l.print());
// console.log('-----------------');
// console.log(l.print());
// console.log('-----------------');
// console.log(l.pop());
// console.log('-----------------');
// console.log(l.print());
// console.log('-----------------');
// console.log(l.pop());
// console.log(l.pop());
// console.log(l.pop());
// console.log(l.pop());
// console.log(l.print());
// console.log("-----------------");
// l.shift();
// l.shift();
// l.shift();
// l.shift();
// console.log(l.print());
// console.log(l.shift());
console.log("=====================================");
l.unshift(50);
l.unshift(40);
l.unshift(30);
l.unshift(20);
l.unshift(10);
l.unshift(0);
l.push(6);
// console.log(l.print());
// console.log("=========================================");
l.setNodeValueByIndex(6, 60);
// console.log(l.print());
l.insert(1,5);
l.insert(3,15);
l.insert(5,25);
l.insert(7,35);
l.insert(9,45);
l.insert(11,55);
l.insert(13,65);
console.log(l.print());
console.log(l.remove(1));
console.log(l.remove(2));
console.log(l.print());
