// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }

  // Second Solution
  // return the two oldest/oldest ages within the array of ages passed in.
// return the two oldest/oldest ages within the array of ages passed in.
// input: array of integers [1, 2, 10, 8]
// output: array of the 2 largest integers [2nd largest, largest] [8, 10]
// create variable oldest and secondOldest
  // Loop over the array of ages
  // create a if statement and check if current number is larger than the current oldest
  // if current > oldest make it the new oldest
  // current > secondOldest
  // return [secondOldest,oldest]

function twoOldestAges(ages){
  let oldest = 0;
  let secondOldest = 0;
    for(let i = 0; i < ages.length; i++){
     let age = ages[i] 
      if(age > oldest){
        secondOldest = oldest
        oldest = age
        }
        else if(age > secondOldest){
          secondOldest = age
        }
        }
        return [secondOldest, oldest];
      }