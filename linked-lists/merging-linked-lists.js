class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function mergingLinkedLists(linkedListOne, linkedListTwo) {
    let p1 = linkedListOne;
    let p2 = linkedListTwo;
    
    while (p1 !== null && p2 !== null) {
      if (p1 === p2) {
        return p1;
      }
      
      p1 = p1.next;
      p2 = p2.next;
  
      if (p1 === null && p2 !== null) {
        p1 = linkedListTwo;
      }
  
      if (p2 === null && p1 !== null) {
        p2 = linkedListOne;
      }
    }
    return null;
  }  