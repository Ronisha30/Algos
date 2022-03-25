function spinWords(sentence){
    const array = sentence.split(' ');
    let result = '';
    array.map((str, i) => {
      if (str.length >= 5){
        array[i] = str.split('').reverse().join('');
      } else {
        array[i] = str;
      }
    result = array.join(' ');
    });
  return result;
  }