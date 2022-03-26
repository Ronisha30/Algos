function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let output = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        output++;
      }
    }
    if (output % 2 != 0) return A[i];
  }
}
