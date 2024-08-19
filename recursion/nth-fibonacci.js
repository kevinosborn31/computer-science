function getNthFib(n) {
    if (n <= 0) return 0;
    let numbers = [0, 1];
  
    for (let i = 2; i < n; i++) {
      numbers.push(calculateNextFib(numbers[i - 1], numbers[i - 2]));
    }
    
    return numbers[n - 1];
  }
  
  function calculateNextFib(minusOne, minusTwo) {
    return minusOne + minusTwo;
  }
  