function isPalindrome(string) {
    if (!string) {
      return false
    }
    const stringArray = string.split('');
  
    let reversedArray = [];
  
  
    for (let index = stringArray.length; index >= 0; index--) {
      reversedArray.push(stringArray[index]);
    }
  
      const reversedString = reversedArray.join('');
      const originalString = stringArray.join('');
  
      return originalString === reversedString;
  }
  
  exports.isPalindrome = isPalindrome;
  