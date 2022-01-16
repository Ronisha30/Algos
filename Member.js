function openOrSenior(data){
    // Declear a variable
     let output = [];
    // Loop over the array 
    //assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
    for(let i = 0; i < data.length; i++ ){
      let currentMember = data[i];// [49,12]
      let enrollment = currentMember
      // Check if to see if member qualifies for open or senior membership
      if(currentMember[0] >= 55 && currentMember[1] > 7){
        output.push('Senior');
      } else{
        output.push('Open')
      }
    }
    return output;
  }