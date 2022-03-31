function dotCalculator(equation) {
  let output = "";
  equation = (equation + "").replace(/\s/g, "");
  ["+", "-", "*", "//"].map((op) => {
    if (equation.includes(op)) {
      output = ".".repeat(
        equation
          .split(op)
          .map((item) => item.length)
          .reduce(operations[op])
      );
    }
  });
  return output;
}

let operations = {
  "+": function (operand1, operand2) {
    return operand1 + operand2;
  },
  "-": function (operand1, operand2) {
    if (operand2 > operand1) return 0;
    return operand1 - operand2;
  },
  "*": function (operand1, operand2) {
    return operand1 * operand2;
  },
  "//": function (operand1, operand2) {
    return operand1 / operand2;
  },
};
