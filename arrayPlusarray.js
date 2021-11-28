//https:www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
// code as fast as you can! You need to double the integer and return it 
function arrayPlusArray(arr1, arr2) {
    let s = 0;
    let arr = [...arr1, ...arr2]
    for(let i = 0; i <arr.length; i++){
      s += arr[i]
      
    }
      return s
  }