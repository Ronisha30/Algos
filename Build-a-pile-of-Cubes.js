function findNb(m) {
  let sum = 0;
  for (let n = 1; sum <= m; n++) {
    sum += n ** 3;
    if (sum === m) return n;
  }
  return -1;
}
