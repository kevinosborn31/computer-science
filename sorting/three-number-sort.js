function threeNumberSort(array, order) {
    const resultArray = [];
    for (let i = 0; i < order.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] === order[i]) {
          resultArray.push(array[j])
        }
      }
    }
    return resultArray;
  }
  