function generateDocument(characters, document) {
    let charactersSeen = {};
  
    for (const character of characters) {
      if (character in charactersSeen) {
        charactersSeen[character]++;
      } else {
        charactersSeen[character] = 1;
      }
    }
  
    for (const char of document) {
      if (char in charactersSeen && charactersSeen[char] > 0) {
        charactersSeen[char]--;
      } else {
        return false;
      }
    }
  
    return true; 
  }
  
  exports.generateDocument = generateDocument;
  