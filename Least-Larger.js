function leastLarger(a, i) {
  // Input: array of numbers
  // Output: number
  // Find the smallest number in the array
  // Declear a output variable
  let output = [];
  //  Use a for loop
  for (let j = 0; j < a.length; j++) {
    // Check to see if the smallest number is larger than given index
    if (a[j] > a[i]) output.push(a[j]);
  }
  return a.indexOf(output.sort((a, b) => a - b)[0]);
}
