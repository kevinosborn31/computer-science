function zeroSumSubarray(nums) {
    for (let pointer1 = 0; pointer1 < nums.length; pointer1++) {
      let sum = 0;
      for (let pointer2 = pointer1; pointer2 < nums.length; pointer2++) {
        sum += nums[pointer2];
        if (sum === 0) {
          return true;
        }
      }
    }
    return false;
  }