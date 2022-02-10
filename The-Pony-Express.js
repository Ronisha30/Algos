function riders(stations) {
    let output = 0;
    let rider = 1;
    for(let i = 0; i < stations.length; i++){
     output += stations[i]
      if(output > 100){
      output = stations[i] 
        rider++
      }
        
    }
     return rider;
      
    }