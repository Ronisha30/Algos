function digitize(n) {
    // How can I change the digits in a number
    // Convert the number to a string
    let digitArray = n.toString().split('');
    //console.log(digitArray.reverse());
    let output = [];
    for(let i = 0; i < digitArray.length; i++){
    output.unshift(parseInt(digitArray[i]));
    }
    return output;
}