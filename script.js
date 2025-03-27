let numA = 0;
let numB = 0;
let operator = "";

function operate(numA, numB, operator) {
  numA = parseFloat(numA);
  numB = parseFloat(numB);

  let result;

  switch (operator) {
    case "+":
      result = numA + numB;
      break;
    case "-":
      result = numA - numB;
      break;
    case "*":
      result = numA * numB;
      break;
    case "/":
      result = numB !== 0 ? numA / numB : "Error: Division by zero";
      break;
    default:
      result = "Error: Invalid operator";
  }

  return result;
}

// DOM




console.log(operate("3", "2", "-"));