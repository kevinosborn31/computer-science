const predictWinner = (nums) => {
    const numsLength = nums.length;
    const memo = new Array(numsLength).fill(null).map(() => new Array(numsLength).fill(null));

    const maxScoreDifference = (left, right) => {
        if (left === right) return nums[left];

        if (memo[left][right] !== null) return memo[left][right];

        const takeLeft = nums[left] - maxScoreDifference(left + 1, right);
        const takeRight = nums[right] - maxScoreDifference(left, right - 1);

        memo[left][right] = Math.max(takeLeft, takeRight);
        return memo[left][right];
    }

    return maxScoreDifference(0, numsLength - 1) >= 0;
};