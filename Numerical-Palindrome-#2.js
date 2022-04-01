function palindrome(num) {
    //Testing to see if my edge cases that are 'Not vaild' contain a singel digit, Neg Number, deciaml
    // Test egde case to see if the case contains a singele digit if so it will return false
   if(typeof num != 'number'|| num < 0 || num % 1 != 0) return 'Not valid'
    if(num < 0) return false
    // Converting a number into a string
      num += '';
    // Looping after and before i so that I can compare each side
     for(let i = 0; i < num.length -1; i++){
       // Checking to see what is before i and after i
       if(num[i] == num[i -1] || num[i] == num[i +1])
         return true;
       //  Checking both iterations to see if they are the same
          if(num[i -1] == num[i +1])
            return true;
     }
       return false;
     }