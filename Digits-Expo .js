function explode(s) {
// Declear a variable
    let results = "";
    // Loop over the array 
    for(let i = 0; i < s.length; i++){
      results += s[i].repeat(+s[i]);
    }
    // Return results
    return results;
}