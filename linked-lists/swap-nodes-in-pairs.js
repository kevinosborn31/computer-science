const swapPairs = (head) => {
  if (!head || !head.next) return head;

  let newHead = head.next;

  let prev = null;
  let current = head;

  while (current && current.next) {
    let nextPair = current.next.next;
    let second = current.next; 

    second.next = current;
    current.next = nextPair;

    if (prev) {
      prev.next = second;
    }

    prev = current;
    current = nextPair;
  }

  return newHead;
};
