function firstNonRepeatingLetter(s) {
    // Add your code here
    //declare an empty string
    let repeatL = false
    for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s.length; j++){
    if(s[i].toLowerCase() === s[j].toLowerCase() && i !== j){
    repeatL = true;
    }
    }
    if(!repeatL){return s[i]}
    repeatL = false
    }
    return ''
    }