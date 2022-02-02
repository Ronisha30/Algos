function countBy(x, n) {
    //Declear variable
    const result = []
    const limit = x * n
  // Use for loop 
    for (let i = 1; i <= limit; i++) {
      // Use condition
      if (i % x === 0) result.push(i)
    }
  // Return the result
    return result
  }
