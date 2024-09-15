const findTheLongestSubstring = (s) => {
    const vowels = new Set('a', 'e', 'i', 'o', 'u');
    let maxLength = 0;

    for (let start = 0; start < s.length; start++) {
        const frequency = { a: 0, e: 0, i: 0, o: 0, u: 0 };

        for (let end = start; end < s.length; end++) {
            if (vowels.has(s[end])) {
                frequency[s[end]]++;
            }

            if (Object.values(frequency).every(count => count % 2 === 0)) {
                maxLength = Math.max(maxLength, end - start + 1);
            }
        }
    }

    return maxLength;
}