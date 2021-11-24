function map(x){
    // create a new empty array
    const doubleNum = [];
    // loop over the array x
    for(let i = 0; i < x.lenghth; i ++){
        let currentVal = x[i];
        //double the current value 
        let currentTimes2 = currentVal*2;
        // put the number in the new array 
        doubleNum.push (currentTimes2);
    }
    // return the new array
    return doubleNum;
}
