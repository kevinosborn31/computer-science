function collidingAsteroids(asteroids) {
    const resultStack = [];
    for (const asteroid of asteroids) {
      if (asteroid > 0) {
        resultStack.push(asteroid);
        continue;
      }
  
      while (true) {
        const lastStackIdx = resultStack.length - 1;
        if (resultStack.length === 0 || resultStack[lastStackIdx] < 0) {
          resultStack.push(asteroid);
          break;
        }
  
        const asteroidSize = Math.abs(asteroid);
        if (resultStack[lastStackIdx] > asteroidSize) {
          break;
        }
  
        if (resultStack[lastStackIdx] === asteroidSize) {
          resultStack.pop();
          break;
        }
  
        resultStack.pop();
      }
    }
    return resultStack;
  }  