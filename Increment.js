function incrementer(nums) {
  // input: array of digits
  // output: array
  let total = [];
  // loop
  for (let i = 0; i < nums.length; i++) {
    // the first digit is incremented by 1 and second digit is incremneted by 2
    // the index starts 1 and not at 0
    total.push((nums[i] + (i + 1)) % 10);
  }
  //  return total
  return total;
}
