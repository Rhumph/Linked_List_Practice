class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.size += 1;
    } else {
      let current = this.head;

      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
      this.size += 1;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    // console.log("prepend active")

    if (this.head === null) {
      this.head = newNode;
      this.size += 1;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
      this.size += 1;
    }
  }
  getSize() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    console.log(count);
    return count;
  }
  getHead() {
    let head = this.head;
    console.log(head);
    console.log("here is head ");
    return head;
  }
  tail() {
    let current = this.head;

    if (current == null) {
      return "There is no tail";
    } else {
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      console.log("tail has been active");
      console.log(current);
      return current;
    }
  }
  at(index) {
    let current = this.head;
    let currentindex = 0;

    while (current !== null) {
      if (currentindex == index) {
        console.log(current);
        return current;
      }

      current = current.nextNode;
      currentindex++;
    }

    return null;
  }
  pop() {
    let current = this.head;

    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    if (current.nextNode.nextNode === null) {
      current.nextNode = null;
    }
    // console.log("this is pop")
    // console.log(list1)
  }
  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }
  find(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }

      current = current.nextNode;
      index++;
    }

    return null;
  }
  toString(current = this.head) {
    if (current === null) {
      return "null";
    }
    return `${current.value} -> ${this.toString(current.nextNode)}`;
  }

  // append(value) adds a new node containing value to the end of the list
  // prepend(value) adds a new node containing value to the start of the list
  // size returns the total number of nodes in the list
  // head returns the first node in the list
  // tail returns the last node in the list
  // at(index) returns the node at the given index
  // pop removes the last element from the list
  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  // find(value) returns the index of the node containing value, or null if not found.
  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list1 = new LinkedList();

list1.append("one");
list1.append("two");
list1.append("three");
list1.append("four");
list1.append("five");
list1.prepend("Zero");
// list1.getSize()
// list1.getHead()
// list1.tail()
// list1.pop()
// list1.at(4)
// console.log(list1.find("five"))
console.log(list1.toString())
// console.log(list1)
