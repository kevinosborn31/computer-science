function twoNumberSum(array, targetSum) {
    const resultArray = [];
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === targetSum) {
            resultArray.push(array[i]);
            resultArray.push(array[j]);
          }
        }
    }
    return resultArray;
  }
  