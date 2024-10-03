const sumDivisibleByP = (nums, p) => {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  const rem = totalSum % p;
  if (rem === 0) return 0;

  const prefixMod = new Map();
  prefixMod.set(0, -1);

  let prefixSum = 0;
  let minLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    prefixSum = (prefixSum + nums[i]) % p;
    let targetMod = (prefixSum - rem + p) % p;

    if (prefixMod.has(targetMod)) {
      minLength = Math.min(minLength, i - prefixMod.get(targetMod));
    }
    prefixMod.set(prefixSum, i);
  }

  return minLength === nums.length ? -1 : minLength;
};
