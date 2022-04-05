function persistence(num) {
    //Declear a variable called output
   let output = 0;
    num = num.toString()
    // Use the while loop to check if the number vaule does not equal true
     while (num.length > 1) {
  // Use the .toString method to convert the number into string
  // Redeclear the number variable and ues the .split method to make the muber a single digit
  output++
       num = num.split('').map(Number).reduce((a,b)=> a * b).toString()
     }
     return output;
  }