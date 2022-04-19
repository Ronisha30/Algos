//Is n a perfect square? 
// Does n = sqNum * sqNum? 
//If so return true 
//If not return false

var isSquare = function(n){
return Math.sqrt(n) % 1 === 0;
}