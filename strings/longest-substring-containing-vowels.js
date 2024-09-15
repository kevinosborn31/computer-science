const findTheLongestSubstring = (s) => {
  const vowelIndices = new Map([
    ["a", 1 << 0],
    ["e", 1 << 1],
    ["i", 1 << 2],
    ["o", 1 << 3],
    ["u", 1 << 4],
  ]);

  let maxLength = 0;
  let bitmask = 0;
  const map = new Map();
  map.set(0, -1);

  for (let i = 0; i < s.length; i++) {
    if (vowelIndices.has(s[i])) {
      bitmask ^= vowelIndices.get(s[i]);
    }

    if (map.has(bitmask)) {
      maxLength = Math.max(maxLength, i - map.get(bitmask));
    } else {
      map.set(bitmask, i);
    }
  }

  return maxLength;
};
