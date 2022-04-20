// I need to write fuction that will take a number value and break it down to the smallest number value
function giveChange(amount) {
  // Craete variables called billType and minNumber
  let billType = [1, 5, 10, 20, 50, 100];
  // New variable is the minNumber variable
  let minNumber = [0, 0, 0, 0, 0, 0];
  //Created for loop that looped through the array to find the smallest number
  for (let i = 6; i >= 0; i--) {
    // Used a while loop to check if the condition was true
    // Everything inside the parathesis is the codition
    while (amount >= billType[i]) {
      amount -= billType[i];
      minNumber[i] += 1;
    }

    // Returned minNumber
  }
  return minNumber;
}
