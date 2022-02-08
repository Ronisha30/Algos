let capitals = function (word) {
    let caps = [];
      for(let i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() === word[i]) caps.push(i);
      }
      return caps;
};