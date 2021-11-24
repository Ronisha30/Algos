function bonusTime(salary, bonus) {
    let finalSalary = salary;
      
      if(bonus === true){
        finalSalary = salary * 10; 
    }
      
      return '£' + finalSalary;
    }