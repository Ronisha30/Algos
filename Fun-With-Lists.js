function length(head) {
    let count = 0;
    while(head) {
      head = head.next;
      count++;
    }
    return count;
  }