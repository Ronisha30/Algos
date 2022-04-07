function duplicateCount(text) {
  // Declear a variable called output
  let output = text.toLowerCase();
  let allStr = {};
  let lastCount = 0;
  for (let i = 0; i < output.length; i++) {
    // Write a condition that seaches for dupicate characters and numbers
    if (!allStr[output[i]]) {
      allStr[output[i]] = 1;
    } // Check to see if a extra charcter has been added
    else if (allStr[output[i]] < 2) {
      allStr[output[i]] += 1;
      lastCount++;
    }
    // Return the lastCount
  }
  return lastCount;
}
