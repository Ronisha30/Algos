class SmallestIntegerFinder {
    findSmallestInt(args) {
      // math.min function to use
      let smallInt = args[0];
      for(let i = 0; i < args.length; i++){
        console.log (smallInt)
          if(args[i] <= smallInt){
            smallInt = args[i];
        }
      }
      return smallInt;
    }
  }