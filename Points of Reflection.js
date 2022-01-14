//www.codewars.com/kata/57bfea4cb19505912900012c/train/javascript
function symmetricPoint(p, q) {
    // Declear a variable
    let output = [];
    // Loop to over the array see where the points are on the line
  for (let i=0; i < p.length; i++) {
    // Push into array
      output.push(q[i]+(q[i]-p[i]));
  }
    // Return the output
    return output;
  }