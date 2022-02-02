function getEvenNumbers(numbersArray) {
    // Declear variable
    let output = [];
  
    // for loop
    for(let i = 0; i < numbersArray.length; i++){
      let currentVal = numbersArray[i]
    console.log(currentVal)
     if (currentVal %2=== 0){
       output.push(currentVal)
     }
    }
   return output;
  }