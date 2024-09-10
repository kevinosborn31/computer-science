const findGreatestCommonDivisor = (num1, num2) => {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};

const insertGreatestCommonDivisors = (head) => {
  let p1 = head;

  while (p1.next !== null) {
    let p2 = p1.next;
    const newValue = findGreatestCommonDivisor(p1.val, p2.val);

    p1.next = new ListNode(newValue, p2);

    p1 = p1.next.next;
  }
  return head;
};
