
// function for operations
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

  return result.toFixed(5); // rounds up the result to N decimals
}

// DOM
const container = document.querySelector("#container");
const display = document.querySelector("#display");
const buttons = container.querySelectorAll("button");

let displayValue = "";
let temporaryNumber = 0;
let operandA = 0;
let operandB = 0;
let operator = "";

// Calculate logic for all buttons
buttons.forEach((button) => {
  if (button.className === "operand") {
    button.addEventListener("click", () => {
      if (temporaryNumber == 0) {
        displayValue = 0;
      }

      temporaryNumber += button.value;

      if (operandA != 0) {
        operandB = parseFloat(temporaryNumber);
      }

      displayValue += button.value;
      display.textContent = parseFloat(displayValue);

      console.log("tempNum: " + temporaryNumber);
    });
  } else if (button.className === "operator") {
    button.addEventListener("click", () => {
      if (operandA === 0) {
        operandA = parseFloat(temporaryNumber);
        console.log("opA: " + operandA);
        temporaryNumber = 0;
        console.log("tempNum: " + temporaryNumber);
      } else if (operandB === 0) {
        operandB = parseFloat(temporaryNumber);
        console.log("opB: " + operandB);
        temporaryNumber = 0;
        console.log("tempNum: " + temporaryNumber);
      } else {
        operandA = operate(operandA, operandB, operator);
        operandB = 0;
        console.log("opA: " + operandA);
        temporaryNumber = 0;
        console.log("tempNum: " + temporaryNumber);
      }
      operator = button.value;
      console.log("operator: " + operator);

      displayValue = parseFloat(operandA);
      display.textContent = displayValue;
    });
  } else if (button.className === "equals") {
    button.addEventListener("click", () => {
      if (operandA !== 0 || operandB !== 0) {
        displayValue = operate(operandA, operandB, operator);
        temporaryNumber = 0;
      } else {
        displayValue = parseFloat(temporaryNumber);
      }

      display.textContent = displayValue;
      console.log("opA: " + operandA);
      console.log("opB: " + operandB);
    });
  } else if (button.className === "clear") {
    button.addEventListener("click", () => {
      displayValue = "";
      temporaryNumber = 0;
      operandA = 0;
      operandB = 0;
      operator = "";
      display.textContent = 0;
    });
  }
});
