function isPalindrome(x) { 
    x = x.toLowerCase()
  // recursive solution
    // condition / base cases
      // is the length of the input 1 character or less?
     if(x.length <= 1) return true;
    // return recursive case
      // is the first char the same as the last
      // and all the inner characters are also a palindrome
    return x.slice(0, 1) === x.slice(-1) && isPalindrome(x.slice(1, -1))
  }