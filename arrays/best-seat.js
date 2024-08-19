function bestSeat(seats) {
    let pointer1 = 0;
    let pointer2 = 0;
    let longestSubarray = 0;
    let subArrayRange = [0, 0];
  
    while (pointer2 < seats.length) {
      if (seats[pointer2] === 0) {
      let currentLongetSubarray = 0;
          while (pointer2 < seats.length && seats[pointer2] === 0) {
            currentLongestSubarray++;
            pointer2++;
        }
        if (currentLongestSubarray > longestSubarray) {
          longestSubarray = currentLongestSubarray;
          subArrayRange = [pointer2 - longestSubarray, pointer2];
        }
      } else {
        pointer2++;
      }
    }
    return subArrayRange[0] + Math.floor((subArrayRange[1] - subArrayRange[0]) / 2);
  }