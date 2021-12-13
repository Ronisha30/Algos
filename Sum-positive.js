// setup loop to go through array of given length
// if arr[i] is greater than zero
// add arr[i] to total
// return total
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
    let sum = 0 
    for(let i = 0; i < arr.length; i++){
      if(arr[i] >= 0 ){
        sum += arr[i]
      }
    }return sum
  }
