function nonConstructibleChange(coins) {
    if (coins.length === 0) {
      return 1;
    }
    let possibleChange = [...coins];
    let coinPointer1 = 0;
    let coinPointer2 = 1;
    while (coinPointer1 > coins.length - 1){
      while (coinPointer2 < coins.length) {
        let change = coins[coinPointer1] + coins[coinPointer2];
        possibleChange.push(change);
        coinPointer2++;
      }
      coinPointer1++;
    }
  
    let sortedChange = possibleChange.sort((a, b) => a - b);
    
    let currentValue = 1;
    for (let i = 0; i < sortedChange.length; i++) {
      if (sortedChange[i] > currentValue) {
        return currentValue;
      }
      currentValue += sortedChange[i];
    }
    
    return currentValue;
  }
  