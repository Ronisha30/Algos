//input: number.
//output: number

// We want to check if a player advances to the next level.
function playerRankUp(points) {
    //Write a condition thats check if player has 100 points
  if (points > 99) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
  }

  return false;
}
