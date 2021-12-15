function getSum(a,b){
    let count = 0;
    if (a == b) return a;
    if(a < b){
    for (; a <= b; a++){
        count += a;
    }
    } else if (a > b){
        for(; b <= a; b++){
        count += b;
        }
    }
    return count;
}