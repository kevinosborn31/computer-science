function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
  
    let idOne = 0;
    let idTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];
  
    while (idOne < arrayOne.length && idTwo < arrayTwo.length) {
      let firstNum = arrayOne[idOne];
      let secondNum = arrayTwo[idTwo];
  
      if (firstNum < secondNum) {
        current = secondNum - firstNum;
        idOne++;
      } else if (secondNum < firstNum) {
        current = firstNum - secondNum;
        idTwo++;
      } else {
        return [firstNum, secondNum];
      }
  
      if (smallest > current) {
        smallest = current;
        smallestPair = [firstNum, secondNum];
      }
    }
    return smallestPair;
  }