const shortestSubarray = (numbers, targetSum) => {
    const arrayLength = numbers.length;
    const cumulativeSums = new Array(arrayLength + 1).fill(0);

    for (let index = 0; index < arrayLength; index++) {
        cumulativeSums[index + 1] = cumulativeSums[index] + numbers[index];
    }

    const indexDeque = [];
    let minimumLength = Infinity;

    for (let currentIndex = 0; currentIndex <= arrayLength; currentIndex++) {
        while (indexDeque.length > 0 && cumulativeSums[currentIndex] - cumulativeSums[indexDeque[0]] >= targetSum) {
            minimumLength = Math.min(minimumLength, currentIndex - indexDeque.shift());
        }

        while (indexDeque.length > 0 && cumulativeSums[currentIndex] <= cumulativeSums[indexDeque[indexDeque.length - 1]]) {
            indexDeque.pop();
        }

        indexDeque.push(currentIndex);
    }

    return minimumLength === Infinity ? -1 : minimumLength;
};