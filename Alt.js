String.prototype.toAlternatingCase = function () {
  let outputStr = "";

  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) {
      outputStr += this[i].toUpperCase();
    } else {
      outputStr += this[i].toLowerCase();
    }
  }

  return outputStr;
};
