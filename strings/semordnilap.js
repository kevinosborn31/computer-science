function semordnilap(words) {
    let wordSet = new Set(words);
    let pairs = [];
    
    for (const word of words) {
      const reversedWord = word.split('').reverse().join('');
      if (reversedWord !== word && wordSet.has(reversedWord)) {
        pairs.push([word, reversedWord]);
        wordSet.delete(word);
        wordSet.delete(reversedWord);
      }
    }
    return pairs;
  }
  