function removeSmallest(numbers) {

    let output = [];
    // for loop through numbers
      let removed = false;
    for(let i = 0; i < numbers.length; i++){
    
    let small = numbers[i];
    // update our output
    if(removed || numbers[i]!== Math.min(...numbers))
    {
    output.push(numbers[i])
    
    }else removed = true;
      }
    return output;
    }