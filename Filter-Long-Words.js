//https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript
// input: string
// output:array of words longer than n
function filterLongWords(sentence, n) {
  // turn string into array of words using split()
  // filter out wards that are larger than n chars
  const arr = sentence.split(" ").filter((word) => {
    //Return word length
    return word.length > n;
  });
  return arr;
}
