//  Solution 1
// Find the average of the numbers inside of the array 
function find_average(array) {
    // Decleared a variable called total
    let total = 0;
    // Created for loop to fid the average of the array
    for(let i = 0; i < array.length; i++){
        // Added to the array
      total += array[i]
      }
      // Returned the average of the array
      return(total/array.length)
    }
    
// Solution 2

function find_average(array) {
    // Decleared a variable called total
    let total = 0;
  if(array.length){ 
    for(let i = 0; i < array.length; i++){
    total += array[i]
  }
    return total/array.length
    } else {
    return 0;
  }
