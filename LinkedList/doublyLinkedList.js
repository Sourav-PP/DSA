class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add element at the beginning
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // Add element at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // Insert element at specific index
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log('Index out of bounds');
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }
    if (index === this.size) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;

    this.size++;
  }

  // Remove node at specific index
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log('Index out of bounds');
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
      if (current === this.tail) this.tail = null;
    } else if (index === this.size - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      let count = 0;
      while (count < index) {
        current = current.next;
        count++;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.size--;
    return current.data;
  }

  // Remove first node containing data
  removeData(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head) this.head.prev = null;
          if (current === this.tail) this.tail = null;
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
        return current.data;
      }
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
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }

  printForward() {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.data + ' <-> ';
      current = current.next;
    }
    console.log(output + 'null');
  }

  printBackward() {
    let current = this.tail;
    let output = '';
    while (current) {
      output += current.data + ' <-> ';
      current = current.prev;
    }
    console.log(output + 'null');
  }
}
