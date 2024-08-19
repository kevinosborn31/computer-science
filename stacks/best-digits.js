function bestDigits(number, numDigits) {
    const digits = [];
  
    for (const digit of number) {
      while (numDigits > 0 && digits.length > 0 && digit > digits[digits.length - 1]) {
        numDigits--;
        digits.pop();
      }
  
      digits.push(digit);
    }
  
    while (numDigits > 0) {
      numDigits--;
      digits.pop();
    }
    
    return digits.join('');
  }