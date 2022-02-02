function find(rats) {
    return rats.reduce((a,b)=>a+Math.pow(2,b),0)
  }