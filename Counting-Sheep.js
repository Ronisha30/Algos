//Create a variable
// Create a empty array
//Create a loop
// Use Math.push method to push into the array
// Return array of sheep
// www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(arrayOfSheep){
    let sheep = []
    for(let i = 0; i < arrayOfSheep.length; i++){
    console.log(arrayOfSheep[i]);
    if(arrayOfSheep[i])sheep.push(arrayOfSheep[i]);
}
    return sheep.length;
}