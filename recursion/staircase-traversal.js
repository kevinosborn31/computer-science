function staircaseTraversal(height, maxSteps) {
    const waysToTop = new Array(height + 1).fill(0);
    waysToTop[0] = 1;
    waysToTop[1] = 1;
  
    for (let currentHeight = 2; currentHeight < height + 1; currentHeight++) {
      for (let step = 1; step <= maxSteps && step <= currentHeight; step++) {
        waysToTop[currentHeight] += waysToTop[currentHeight - step];
      }
    }
    return waysToTop[height];
  }