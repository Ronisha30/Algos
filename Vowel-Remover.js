function shortcut (string) {
    //create output
    let output = ''
    let vowels = 'aeiou';
    for(let i = 0; i < string.length;i++){
      let currentLetter = string[i]
      if(!vowels.includes(currentLetter)) output += currentLetter;
    }
    return output;
  }