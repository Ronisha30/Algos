function bouncingBall(h,  bounce,  window) {
    if(h > 0 && bounce < 1 && bounce > 0 && window < h){
      let count = 1;
      h = h * bounce
      while(h >window){
        count += 2
        h = h * bounce
        }
        return count;
        }else {
          return -1;
      }
    }