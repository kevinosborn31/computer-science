class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    const values = [];
  
    if (!head) {
      return;
    }
  
    let pointer = head;
    let lengthCount = 0;
  
    while (pointer !== null) {
      values.push(pointer.value);
      lengthCount++;
      pointer = pointer.next;
    }
  
    let indexToRemove = values.length - k
      
    let counter = 0;
  
    let pointer2 = null;
    let pointer3 = head;
  
    while (counter < indexToRemove) {
      counter++;
      if (pointer2 === null) {
        pointer2 = head;
      } else {
        pointer2 = pointer2.next;
      }
      pointer3 = pointer3.next;
    }
    
    if (pointer3.next === null) {
      pointer2.next = null;
    }
    pointer2.next = pointer3;
    pointer3 = null;
    return head;
    
  }  