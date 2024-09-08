const splitListToParts = function (head, k) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  const partSize = Math.floor(length / k);
  const extraNodes = length % k;

  const result = [];
  current = head;

  for (let i = 0; i < k; i++) {
    let partHead = current;
    let currentPartSize = partSize + (i < extraNodes ? 1 : 0);

    for (let j = 1; j < currentPartSize; j++) {
      if (current) {
        current = current.next;
      }
    }

    if (current) {
      const nextPartHead = current.next;
      current.next = null;
      current = nextPartHead;
    }

    result.push(partHead);
  }

  return result;
};
