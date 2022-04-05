function add(n){
    // create a functionthat returns the recurison
    const addNums = function (newNum){
      return add(n + newNum)
      }
    
   addNums.valueOf = function(){
     return n
   }
    // addNums continues to add to addNums function
  return addNums
  }