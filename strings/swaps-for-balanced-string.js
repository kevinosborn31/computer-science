const minSwaps = (s) => {
  let imbalance = 0;
  let swaps = 0;

  for (let char of s) {
    if (char === "[") {
      imbalance++;
    } else {
      imbalance--;
    }
    if (imbalance < 0) {
      swaps++;
      imbalance++;
    }
  }

  return swaps;
};
