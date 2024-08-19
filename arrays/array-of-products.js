function arrayOfProducts(array) {
    const resultArray = [];
  
    for (let i = 0; i < array.length; i++) {
      let result = 1; 
      for (let j = 0; j < array.length; j++) {
        if (j !== i) {
          result *= array[j]; 
        }
      }
      resultArray.push(result);
    }
  
    return resultArray;
  }