const reversePolishNotation = (tokens) => {
    const stack = [];
  
    for (const token of tokens) {
      if (token === '+') {
        stack.push(stack.pop() + stack.pop());
      } else if (token === '-') {
        const firstNum = stack.pop();
        stack.push(stack.pop() - firstNum);
      } else if (token === '*') {
        stack.push(stack.pop() * stack.pop());
      } else if (token === '/') {
        const firstNum = stack.pop();
        stack.push(Math.trunc(stack.pop() / firstNum));
      } else {
        stack.push(parseInt(token));
      }
    }
  
    return stack.pop();
  }