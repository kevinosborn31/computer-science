function commonCharacters(strings) {
    let lettersFound = {};
    let resultArray = [];
    
    for (let i = 0; i < strings.length; i++) {
      const stringArray = strings[i].split('');
      let foundInCurrentString = {};
      
      for (let j = 0; j < stringArray.length; j++) {
        const letterFound = stringArray[j];
        
        if (!foundInCurrentString[letterFound]) {
          if (!lettersFound[letterFound]) {
            lettersFound[letterFound] = 1;
          } else {
            lettersFound[letterFound]++;
          }
          
          foundInCurrentString[letterFound] = true;
        }
      }
    }
    
    for (let letter in lettersFound) {
      if (lettersFound.hasOwnProperty(letter)) {
        if (lettersFound[letter] === strings.length) {
          resultArray.push(letter); 
        }
      }
    }
    
    return resultArray;
  }
    