// input: find the index of character
// output: empty array
function vowelIndices(word) {
  let arr = [];
  const vowels = ["a", "e", "i", "o", "u", "y"];
  // Declear a output variable as an empty array
  for (let i = 0; i < word.length; i++) {
    // Check if the char contains a letter vowel
    if (vowels.indexOf(word[i].toLowerCase()) > -1) {
      // find a vowel and store the index
      arr.push(i + 1);
    }
  }
  // Return the output
  return arr;
}
