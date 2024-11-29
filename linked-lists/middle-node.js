class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  const returnNodeOfLinkedList = (linkedList, index) => {
    let curr = linkedList;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }
  
  const middleNode = (linkedList) => {
    let curr = linkedList;
    let length = 0;
  
    while (curr !== null) {
      length++;
      curr = curr.next;
    }
  
    curr = linkedList;
  
    const middleIndex = Math.floor(length / 2);
  
    return returnNodeOfLinkedList(linkedList, middleIndex);
  }