function moveElementToEnd(array, toMove) {
    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
      while (left < right && array[right] === toMove) {
        right--;
      }
  
      if (array[left] === toMove) {
        const temp = array[right];
        array[right] = array[left];
        array[left] = temp;
      }
  
      left++;
    }
  
    return array;
  }