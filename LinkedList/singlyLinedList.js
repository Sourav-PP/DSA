class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Index is out of bounds");
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  removeData(data) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  find(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return null;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.data + " -> ";
      current = current.next;
    }
    console.log(output + "null");
  }
}

const list = new LinkedList();
list.print();
list.prepend(10);
list.append(20);
list.print();
