function betterThanAverage(classPoints, yourPoints) {
    // Find the average of the class scores 
    // Compare those scores with your score
    // Add your score to the class score
    // Use loop
    // Check the average of the clsass scores to see if they are greater the my score
    // return true if not
      
    let scores = 0;
    for(let i = 0; i < classPoints.length; i ++){
     scores += classPoints[i]
    }
    //   if(arguments.length != scores || classPoints){
    //     true;
    //   }
      
      scores = scores / classPoints.length
      if(scores > yourPoints){
      return false;
      
      }else{
      return true;
        }
    }