//Create a variable to get the count of the vowel
//Use a loop to go over the arr
//Create an array
//Return the count
//www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
    let vowelsCount = 0;
    let arr = str.split("")
    for(let i = 0; i < arr.length; i++){
    if(arr[i]=== 'a'|| arr[i]==='e'|| arr[i]==='i'||  arr[i]==='o'||arr[i]==='u'){
        vowelsCount += 1
        }
    }
    
    return vowelsCount;
}