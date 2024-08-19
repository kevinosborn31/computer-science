function blackjackProbability(target, startingHand) {
    const memo = {};
    return parseFloat(calculateProbability(startingHand, target, memo).toFixed(3));
  }
  
  function calculateProbability(currentHand, target, memo) {
    if (currentHand in memo) return memo[currentHand];
    if (currentHand > target) return 1;
    if (currentHand + 4 >= target) return 0;
  
    let totalProbability = 0;
    for (let drawnCard = 1; drawnCard <= 10; drawnCard++) {
      totalProbability += 0.1 * calculateProbability(currentHand + drawnCard, target, memo);
    }
  
    memo[currentHand] = totalProbability;
    return totalProbability;
  }