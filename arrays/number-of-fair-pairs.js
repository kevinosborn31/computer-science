const countFairPairs = (nums, lower, upper) => {
    let currentPairs = 0;

    for (let p1 = 0; p1 < nums.length - 1; p1++) {
        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            const sum = nums[p1] + nums[p2];
            if (sum >= lower && sum <= upper) {
                currentPairs++;
            }
        }
    }

    return currentPairs;
};