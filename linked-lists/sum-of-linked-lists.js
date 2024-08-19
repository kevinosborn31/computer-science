class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    const listOneValue = getLinkedListValue(linkedListOne);
    const listTwoValue = getLinkedListValue(linkedListTwo);
    const finalValue = listOneValue + listTwoValue;
    const finalValueArray = finalValue.split('');
    for (let i = 0; i < finalValueArray.length; i++) {
      
    }
    return linkedListOne;
  }
  
  function getLinkedListValue(linkedList) {
    let curr = linkedList;
    const finalValue = [];
  
    while (curr.value !== null) {
      finalValue.unshift(curr.value);
      curr = curr.next;
    }
  
    return parseInt(finalValue.join(''));
  }  