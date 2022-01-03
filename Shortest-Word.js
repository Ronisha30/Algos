// function findShort(s){
//     let words = s.split(" ");
//     let shortLength = words[0].length
//     console.log(words)
//     for (let i = 0; i < words.length; i++){
//     console.log(words[i])
//     if (shortLength > words[i].length){
//     shortLength = words[i].length
//     console.log (words[i], "updated short")
//     }
//     }
//     return shortLength;
//     }
    function solution(number){
        let output = 0; 
        for(let i = 0; i < number.length; i++){
            let currNum = [i]
            output += currNum;
        
        }
        return output
        }
    