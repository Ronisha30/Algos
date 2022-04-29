function reverseWords(str) {
  // input:string
  // output:revered string
  // convert our string to an array
  // loop over each word in our array
  // reverse the order of letters for each word
  // convert back to string

  // using spread operator to create array of characters
  // let strArr = [...str]

  let wordArr = str.split(" ");

  let reverseWordArr = wordArr.map((word) => {
    return word.split("").reverse().join("");
  });
  console.log(reverseWordArr.join(" "));
  return reverseWordArr.join(" ");
}
