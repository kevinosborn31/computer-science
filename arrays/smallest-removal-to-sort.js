const findLengthOfShortestSubarray = (array) => {
    const arrayLength = array.length;

    let pointer1 = 0;
    while (pointer1 < arrayLength - 1 && array[pointer1] <= array[pointer1 + 1]) {
        pointer1++;
    }

    if (pointer1 === arrayLength - 1) return 0;

    let pointer2 = arrayLength - 1;
    while (pointer2 > 0 && array[pointer2] >= array[pointer2 - 1]) {
        pointer2--;
    }

    let shortestSubarrayLength = Math.min(arrayLength - pointer1 - 1, pointer2);

    let leftPointer = 0, rightPointer = pointer2;
    while (leftPointer <= pointer1 && rightPointer < arrayLength) {
        if (array[leftPointer] <= array[rightPointer]) {
            shortestSubarrayLength = Math.min(shortestSubarrayLength, rightPointer - leftPointer - 1);
            leftPointer++;
        } else {
            rightPointer++;
        }
    }

    return shortestSubarrayLength;
};
