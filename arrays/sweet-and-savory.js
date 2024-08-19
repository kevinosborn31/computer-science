function sweetAndSavory(dishes, target) {
    const sweetDishes = dishes.filter(dish => dish < 0).sort((a, b) => b - a);
    const savoryDishes = dishes.filter(dish => dish > 0).sort((a, b) => a - b);
  
    let bestDishes = [0, 0];
    let bestDifference = Infinity;
  
    let sweetPointer = 0;
    let savoryPointer = 0;
  
    while (sweetPointer < sweetDishes.length && savoryPointer < savoryDishes.length) {
      const currentSum = sweetDishes[sweetPointer] + savoryDishes[savoryPointer];
  
      if (currentSum <= target) {
        const currentDifference = Math.abs(target - currentSum);
        if (currentDifference < bestDifference) {
          bestDifference = currentDifference;
          bestDishes = [sweetDishes[sweetPointer], savoryDishes[savoryPointer]];
        }
        savoryPointer += 1;
      } else {
        sweetPointer += 1;
      }
    }
  
    return bestDishes;
  }