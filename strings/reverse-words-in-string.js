function reverseWordsInString(string) {
    for (let i = 0; i < string.length; i++) {
      let word = [];
      let words = [];
      while (string[i] !== " ") {
        word.push(string[i])
        i++;
      }
      if (word) {
        words.unshift(word);
        word = [];
      }
      let j = i;
      let whiteSpaces = [];
      while (string[j] === " ") {
        whiteSpaces.push(" ");
        j++;
      }
  
      if (whiteSpaces.length > 0) {
        words.unshift(whiteSpaces.join(""));
        i = j;
          
      }
    }
    return words.join('');
  }
  