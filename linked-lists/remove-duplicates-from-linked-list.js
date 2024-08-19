class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    let curr = linkedList;
  
    while (curr !== null) {
      let nextNode = curr.next;
      while (nextNode !== null && nextNode.value === curr.value) {
        nextNode = nextNode.next
      }
       curr.next = nextNode;
      curr = nextNode;
    }
    return linkedList;
  }  