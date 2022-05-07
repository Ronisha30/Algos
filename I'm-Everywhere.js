function i(word) {
  //input: string ex. Phone
  // output: string (i + word) ex: iPhone
  // find how many vowels are in the word
  // make an array of vowels ["a", 'e', 'i','o','u']
  // make a vowelCounter
  // looping over the word
  // increment vowelCounter when letter is a vowel
  // Using RegEx
  //   const vowelArr = word.match(/[aeiou]/gi).length
  //   const vowelCount = vowelArr.length
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCounter = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (vowels.includes(letter)) {
      vowelCounter++;
    }
  }
  //   console.log("lowerCase" , word[0].match(/[A-Z]/g))
  if (word && word[0].toLowerCase() === "i") {
    return "Invalid word";
  }
  if (vowelCounter >= word.length - vowelCounter) {
    return "Invalid word";
  }
  //   if(word[0].match(/[A-Z]/g)){
  //     return "Invalid word"
  //   }
  if (word[0].toLowerCase() === word[0]) {
    return "Invalid word";
  }
  return "i" + word;
  // Return "Invalid word" if any of these are TRUE
  // if word begins with "i"
  // if vowelCount is greater than or equal to the number of consonants
  // if the first letter is lowercase
  //Return the "i" + word
}

