function runLengthEncoding(string) {
    const stringArray = string.split('');
    const encodedString = [];
    let currentLetter = stringArray[0];
    let occurances = 0;
  
    for (const letter of stringArray) {
      if (letter === currentLetter) {
        occurances++;
      } else {
        encodedString.push(`${occurances}${currentLetter}`);
        currentLetter = letter;
        occurances = 1; 
      }
  
      if (occurances === 9) {
        encodedString.push(`${occurances}${currentLetter}`);
        occurances = 0; 
      }
    }
  
    encodedString.push(`${occurances}${currentLetter}`);
  
    return encodedString.join('');
  }
  