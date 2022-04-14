// Soulution 1
// I will need to write a function that takes in
// A singel argument, a lsit of words, and  returns the length of the longest word

// function longest(words) {
// // Declear a variable called output
//    let output = 0;
// //Create a for loop
//   for(let i = 0; i < words.length; i++){
//     // Write a condidtion to see which word is the longest
//    if(output < words[i].length)
//      output = words[i].length
//   } return output;
// }

// Solution 2

function longest(words){
    const sortedWord = words.sort((a, b) => b.length - a.length)
    return sortedWord [0].length;
  }
  