function arrayPlusArray(arr1, arr2) {
    let s = 0;
    let arr = [...arr1, ...arr2]
    for(let i = 0; i <arr.length; i++){
      s += arr[i]
      
    }
      return s
  }