function removeExclamationMarks(s) {
    // output variable
    let newStr = '';
    // for loop to build the output
    for(let i = 0; i < s.length; i++){
      let currentCharacter = s [i];
      // add character that use the exclamation mark
      if(currentCharacter !=='!'){
        newStr += currentCharacter;
        }
    } 
     return newStr;   
  // return str
  }
