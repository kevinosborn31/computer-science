function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    const sortedRedSpeeds = redShirtSpeeds.sort((a, b) => a - b);
    const sortedBlueSpeeds = blueShirtSpeeds.sort((a, b) => a - b);
  
    let pairs = [];
  
    for (let redPointer = 0; redPointer < sortedRedSpeeds.length; redPointer++) {
      let bluePointer = sortedBlueSpeeds.length;
      pairs.push(Math.max(bluePointer, redPointer));
    }
    const sortedPairs = pairs.sort((a, b) => a - b);
  
    if (fastest) {
      return sortedPairs[sortedPairs.length - 1];
    } else {
      return sortedPairs[0];
    }
  }  