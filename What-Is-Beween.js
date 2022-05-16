// I needed to take two integers where one was bigger than the other.
// Return all integers that were in between the two

function between(a, b) {
  // Decleared a variable called output set it to empty
  let output = [];
  // Used a for loop to  search for all integers in between the higest and lowest integers
  for (let i = a; i <= b; i++) {
    // Used push method to grab all integers inside the array
    output.push(i);
  }
  // Return output
  return output;
}
