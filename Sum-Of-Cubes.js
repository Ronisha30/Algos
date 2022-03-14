function sumCubes(n) {
  let total = 0;
  for (let i = 1; i < n.length; i++) {
    total += Math.pow(i, 3);
  }
  return total;
}
