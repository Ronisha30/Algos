// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
//Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

//Given the Number value remove the last digit until I find a number value that contains a number value that is mulitple of three.

const prevMultOfThree = (n) => {
  // Craete a variable that converts a number to a string and then split the string
  let arr = n.toString().split("");
  // Craete a nested for loop for each variable and check the length of the loops to see if they contain a number that has multiples of three
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; i++) {
      // Create a second variable that coverts the string back to a number and joins the number back together
      let sum = +arr.join("");
      // Check if the total sum of the number adds up to the multiple of three
      if (sum % 3 === 0) return sum;
      arr.pop();
    }

    return null;
  }
};
 