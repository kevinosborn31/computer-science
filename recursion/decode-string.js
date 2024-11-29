const decodeString = (s) => {
  const decodeHelper = (index) => {
    let currentString = "";
    let currentNum = 0;

    while (index < s.length) {
      const char = s[index];

      if (!isNaN(char)) {
        currentNum = currentNum * 10 + parseInt(char);
      } else if (char === "[") {
        const [decodedSubstring, nextIndex] = decodeHelper(index + 1);
        currentString += decodedSubstring.repeat(currentNum);
        currentNum = 0; 
        index = nextIndex; 
      } else if (char === "]") {
        return [currentString, index];
      } else {
        currentString += char;
      }

      index++;
    }

    return [currentString, index];
  };

  return decodeHelper(0)[0];
};
