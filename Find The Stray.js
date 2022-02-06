function stray(numbers) {
    let strayChar = numbers[0];
    
     for(let i = 1; i < numbers.length; i++){
      if(strayChar !== numbers[i]){
      return strayChar = numbers[i];
       }
     }
           return 0;
     } 