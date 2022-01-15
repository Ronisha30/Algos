//www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
    // Declare variable
    const output = [];
    // Loop over the array
    for(let i = 0; i < l.length; i++){
      // Declear current value
      let currentItem = l[i];
    // Check if current item is number
      if(typeof currentItem != 'string')
      // Push into empty arrary
      output.push(currentItem);
     //Return output
  }
     return output;
  }