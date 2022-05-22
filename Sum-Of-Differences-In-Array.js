function sumOfDifferences(arr) {
    // input: array
    // output: The sum of consecutive value pairs in an arr
  
    // I will use the .sort() function I want my array to go in descending order
    const sorted = arr.sort((a, b) => b - a);
    // Declear a variable called sum
    let sum = 0;
    // Use a for loop to find all of the consecutive number value pairs
    for (let i = 1; i < sorted.length; i++) {
      sum += sorted[i - 1] - sorted[i];
    }
    // Reurn the sum of the sorted array
    return sum;
  }
  