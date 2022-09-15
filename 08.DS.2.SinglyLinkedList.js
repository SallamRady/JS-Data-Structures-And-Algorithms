/**
 * class : Node
 * **** Proberities ****
 * val  -> peice of data
 * next -> pointer refer to next node.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * class : SinglyLinkedList
 * **** Proberities ****
 * length -> length of linked list.
 * head -> pointer refer to first node in linked list.
 * tail -> pointer refer to last node in linked list.
 * **** Methods ****
 * 1. push(val) : add new node to last of linked list.
 * 2. pop() : remove last node in linked list.
 * 3. shift() : remove first node in linked list.
 * 4. unshift(val) : add new node to the begin of linked list.
 * 5. getByIndex(index) : retriving node from linked list according it's index/postion [0-based].
 * 6. setNodeValueByIndex(index, value) : Changing the value of a node based on it's index/position in the Linked List
 * 7. insert(index, value) : Adding a node to the Linked List at a specific position
 * 8. remove(index) : Removing a node from the Linked List at a specific index/position
 * 9. reverse() : Reversing the Linked List in place!
 */

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /**
   * push new node to the end of linked list.
   * complexity -worest case-> O(1)
   * @param {*} val node value
   * @returns list
   */
  push(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /**
   * remove last node in linked list.
   * complexity -worest case-> O(1)
   * @returns removed node
   */
  pop() {
    if (this.length == 0) {
      return undefined;
    } else {
      let beforLast = null,
        p = this.head;

      if (this.length == 1) {
        this.length = 0;
        this.head = null;
        this.tail = null;
      } else {
        while (p.next != null) {
          beforLast = p;
          p = p.next;
        }
        beforLast.next = null;
        this.tail = beforLast;
        this.length--;
      }

      return p;
    }
  }
  /**
   * remove first node in linked list.
   * complexity -worest case-> O(1)
   * @returns removed node.
   */
  shift() {
    if (this.length == 0) return undefined;

    let removedNode = this.head;
    if (this.length == 1) {
      this.length = 0;
      this.head = null;
      this.tail = null;
      return removedNode;
    }
    this.length--;
    this.head = removedNode.next;
    return removedNode;
  }
  /**
   * add new node to the begin of linked list.
   * complexity -worest case-> O(1)
   * @param {val} val Node value
   * @returns list
   */
  unshift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * retriving node from linked list according it's index/postion [0-based].
   * complexity -worest case-> O(n)
   * @param {*} index
   * @returns
   */
  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let p = this.head,
      counter = 0;
    while (p.next != null && counter < index) {
      p = p.next;
      counter++;
    }
    return p;
  }
  /**
   * Changing the value of a node based on it's index/position in the Linked List
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
   * insert : Adding a node to the Linked List at a specific position
   * complexity -worest case-> O(n)
   * @param {*} index refer to position [0-based]
   * @param {*} value the data of node
   * @returns 
   */
  insert(index, value) {
    let newNode = new Node(value);

    if (index < 0 || index > this.length) return false;

    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);

    let previous = this.getByIndex(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return true;
  }

  /**
   * remove : Removing a node from the Linked List at a specific index/position
   * complexity -worest case-> O(n)
   * @param {*} index refer to position [0-based].
   * @returns 
   */
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return this.shift();
    if (index == this.length-1) return this.pop();

    let previous = this.getByIndex(index-1);
    let removedNode = previous.next;
    previous.next = removedNode.next;
    this.length--;
    return  removedNode;
  }

  /**
   * reverse : Reversing the Linked List in place!
   * complexity -worest case-> O(n)
   */
  reverse(){
    let node = this.head,next = null,prev = null;
    this.head = this.tail;
    this.tail = node;

    for (let i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return this;
  }

  print() {
    let p = this.head;
    while (p.next != null) {
      console.log(p.val);
      p = p.next;
      if (p.next == null) console.log(p.val);
    }
  }
}

// test
let l = new SinglyLinkedList();
l.push(5);
l.push(10);
l.push(15);
// console.log(l.pop());
// console.log(l.pop());
// console.log(l.pop());
// l.shift();
// console.log(l);
// console.log(l.shift());
// console.log(l.shift());
// console.log(l);
l.unshift(1);
l.unshift(2);
l.unshift(3);

// let index = 3;
// console.log("node with index ", index);
// console.log(l.getByIndex(index));
// l.setNodeValueByIndex(index, 4);
// console.log(l.getByIndex(index));
// l.insert(2, 20);
// l.insert(1, 30);
// l.insert(6, 90);
// l.insert(9, 100);
// console.log("-----------------------------------");
// l.print();
// l.remove(1);
// l.remove(0);
// l.remove(l.length-1);
// console.log("-----------------------------------");
l.print();
console.log("-----------------------------------");
l.reverse();
l.print();