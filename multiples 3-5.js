function solution(number){
    //input:  first initial number 10
    // output: number
      
      //  Find the sum of all multiples of the numbers 3 and 5.
      let output = 0;
      // use  a for loop to look for all numbers that are multiples of 3 and 5
      for(let i = 0; i < number; i++){
        // if i is a muliple of 3 and 5 only count once.
        if(i % 3 === 0 || i % 5 === 0){
        //  Update my output
        output += i
        }
          
      }
      return output;
    }