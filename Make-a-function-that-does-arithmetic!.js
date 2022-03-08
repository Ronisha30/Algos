function arithmetic(a, b, operator){
    const functions = {
      'add': (a, b) => a + b,
      'subtract': (a, b) => a - b,
      'multiply': (a, b) => a * b,
      'divide': (a, b) => a / b,
    };
    
    return functions[operator](a, b);
  };