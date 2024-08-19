function firstNonRepeatingCharacter(string) {
    const stringArray = string.split('');
    if (stringArray.length === 0) {
      return -1;
    }
    
    for (let i = 0; i < stringArray.length; i++) {
      let foundDuplicate = false;
      for (let j = 0; j < stringArray.length; j++) {
        if (i !== j && stringArray[i] === stringArray[j]) {
          foundDuplicate = true;
          break;
        }
      }
      if (!foundDuplicate) {
        return i;
      }
    }
    
    return -1;
  }