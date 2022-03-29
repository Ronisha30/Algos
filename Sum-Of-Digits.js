function digital_root(n) {
    // ...
    if(n < 10){return n}
    let sum = 0;
    let sumInt = n.toString().split('')
    for(let i = 0; i < sumInt.length; i++){
        sum += Number(sumInt[i])
    }
      return digital_root(sum) 
  }