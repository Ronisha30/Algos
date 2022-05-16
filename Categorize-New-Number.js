function openOrSenior(data){
    // Declear a variable called results  set as an empty array
    let results = [];
    // Use forEach method
    data.forEach(function(member) {
    // IF statements to check to see if member fits the criteria of a "Senior" membership
    // If you dont meet both checks then they are "Open"
      if(member[0] >= 55 && member[1] > 7) {
        results.push('Senior');
      } else {
        results.push('Open');
      }
    })
    
    // Return array if membership values 
    return results;
  }