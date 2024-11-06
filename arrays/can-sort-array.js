const canSortArray = (nums) => {
    function countSetBits(num) {
        let bitCount = 0;
        for (let i = 31; i >= 0; i--) {
            if (((num >> i) & 1) === 1) {
                bitCount++;
            }
        }
        return bitCount;
    }

    function isArraySorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    let setBitCounts = [];
    for (let i = 0; i < nums.length; i++) {
        setBitCounts[i] = countSetBits(nums[i]);
    }

    let isSorted = false;
    let iterations = 0;
    const maxIterations = nums.length * 2; 

    while (!isSorted && iterations < maxIterations) {
        isSorted = true;
        
        for (let i = 1; i < nums.length; i++) {
            if (setBitCounts[i] === setBitCounts[i - 1] && nums[i] < nums[i - 1]) {
                let temp = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = temp;

                isSorted = false;
            }
        }

        iterations++;
    }

    return isArraySorted(nums);
};
