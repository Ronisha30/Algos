function accum(s) {
  let str = "";

  for (let i = 0; i < s.length; i++) {
    let addStr = "";
    for (let j = 0; j < i + 1; j++) {
      addStr += s[i];
    }
    addStr = addStr.toLowerCase();
    addStr = addStr.charAt(0).toUpperCase() + addStr.slice(1);
    if (i < s.length - 1) {
      addStr += "-";
    }
    str += addStr;
  }
  return str;
}
