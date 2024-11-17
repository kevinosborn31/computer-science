const majorityElement = (array) => {
  let candidate = null;
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (counter === 0) {
      candidate = array[i];
      counter = 1;
    } else if (array[i] === candidate) {
      counter++;
    } else {
      counter--;
    }
  }

  counter = 0;
  for (let num of array) {
    if (num === candidate) {
      counter++;
    }
  }

  if (counter > Math.floor(array.length / 2)) {
    return candidate;
  } else {
    return null;
  }
};
