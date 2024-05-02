class Node {
 constructor(value) {
	this.value = value;
	 this.next = null;
 }
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    let prev = this.head;
    while(prev.next) {
      prev = prev.next;
    }
    prev.next = node;
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
    } else {
      let curr = this.head;
      let valuesArr = [];
      while(curr) {
        valuesArr.push(curr.value);
        curr = curr.next;
      }
      console.log("Linked list values", valuesArr.join(", "))
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while(curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}



const linkedList = new LinkedList();
linkedList.prepend(2);
linkedList.prepend(4);
linkedList.prepend(6);
linkedList.prepend(8);
linkedList.prepend(1);
linkedList.print();
linkedList.reverse();
linkedList.print();
linkedList.reverse();
linkedList.print();
