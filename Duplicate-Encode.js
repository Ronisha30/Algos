//     Does it repeat or does not repeat
//     replace
function duplicateEncode(word) {
    let newStr = "";
  
    word = word.toLowerCase();
  
    for (let i = 0; i < word.length; i++) {
      if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
        newStr += "(";
      } else {
        newStr += ")";
      }
    }
  
    return newStr;
  }