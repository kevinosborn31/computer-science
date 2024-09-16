const findMinDifference = (timePoints) => {
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const minutesList = timePoints.map(toMinutes);
  minutesList.sort((a, b) => a - b);

  let minDiff = Infinity;

  for (let i = 1; i < minutesList.length; i++) {
    minDiff = Math.min(minDiff, minutesList[i] - minutesList[i - 1]);
  }

  minDiff = Math.min(
    minDiff,
    minutesList[0] + 1440 - minutesList[minutesList.length - 1]
  );

  return minDiff;
};
