function mergeOverlappingIntervals(array) {
    if (array.length === 0) return [];
  
    const sortedArray = array.sort((a, b) => a[0] - b[0]);
  
    const finalArray = [sortedArray[0]];
  
    for (let i = 1; i < sortedArray.length; i++) {
      const currentInterval = sortedArray[i];
      const lastInterval = finalArray[finalArray.length - 1];
  
      if (currentInterval[0] <= lastInterval[1]) {
        lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
      } else {
        finalArray.push(currentInterval);
      }
    }
  
    return finalArray;
  }