function sortedSquaredArray(array) {
    const finalArray = [];
    for (let index = 0; index < array.length; index++) {
      array[index] * array[index];
      finalArray.push(array[index] * array[index]);
    }
  return finalArray.sort((a, b) => a - b);
  }
  