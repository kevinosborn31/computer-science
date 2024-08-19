function threeNumberSum(array, targetSum) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        
      for (let j = 1; j < array.length; j++) {
          
        for (let k = 2; k < array.length; k++) {
        let tempResultArray = [];
        if (array[i] + array[j] + array[k] === targetSum) {
            tempResultArray.push(array[i]);
            tempResultArray.push(array[j]);
            tempResultArray.push(array[k]);
            tempResultArray.sort((a, c) => a - c);
            resultArray.push(tempResultArray);
          }
        
        }
      }
    }
    return resultArray;
  }