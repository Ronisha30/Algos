function createPhoneNumber(numbers) {
  let digits = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    digits = digits.replace("x", numbers[i]);
  }

  return digits;
}
