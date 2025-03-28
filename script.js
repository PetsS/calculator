let operandA = 0;
let operandB = 0;
let operator = "";
let displayValue = 0;

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
const container = document.querySelector("#container");
const display = document.querySelector("#display");
const buttons = container.querySelectorAll("button");

buttons.forEach(button => {
  if (button.className === "operand") {
    button.addEventListener("click", () => {
      displayValue += button.value;
      display.textContent = displayValue;
    });
  };
});



console.log(operate("3", "2", "-"));