function missingNumbers(nums) {
    const includedNums = new Set(nums);
    let missingNums = [];
    for (let i = 1; i < nums.length + 3; i++) {
      if (!includedNums.has(i)) {
        missingNums.push(i);
      }
    }
    return missingNums;
  }