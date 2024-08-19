function powerset(array) {
    const powerSet = [[]];
    
    for (const ele of array) {
       const powerSetLength = powerSet.length;
        for (let j = 0; j < powerSetLength; j++) {
          const currentSubset = powerSet[j];
          powerSet.push(currentSubset.concat(ele));
        }
    }
    return powerSet;
  }
  