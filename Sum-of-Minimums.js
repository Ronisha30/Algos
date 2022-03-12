function sumOfMinimums(arr) {
  let output = 0;
  // Declear a variable
  for (let i = 0; i < arr.length; i++) {
    //Loop over the arr
    output += Math.min(...arr[i]);
    // Add to
    console.log(output);
    // Return the output
  }
  return output;
}
