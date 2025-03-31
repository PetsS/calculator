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

  // Only format numbers, not error messages
  if (typeof result === "number") {
    result = parseFloat(result.toFixed(5)); // Remove unnecessary trailing zeros, but also displays upt to a N nuber of decimals rounded up
  }

  return result;
}

// DOM
const container = document.querySelector("#container");
const display = document.querySelector("#display");
const buttons = container.querySelectorAll("button");

let displayValue = "";
let temporaryNumber = "";
let operandA = 0;
let operandB = 0;
let operator = "";

// Calculate logic for all buttons
buttons.forEach((button) => {
  if (button.className === "operand") {
    button.addEventListener("click", () => {
      temporaryNumber += button.value;

      if (operandA != 0) {
        operandB = parseFloat(temporaryNumber);
      }

      displayValue = temporaryNumber;
      display.textContent = displayValue;

      console.log("tempNum: " + temporaryNumber);
    });
  } else if (button.className === "operator") {
    button.addEventListener("click", () => {
      if (operandA === 0) {
        operandA = parseFloat(temporaryNumber);
        console.log("opA: " + operandA);
        temporaryNumber = "";
        console.log("tempNum: " + temporaryNumber);
      } else if (operandB === 0) {
        operandB = parseFloat(temporaryNumber);
        console.log("opB: " + operandB);
        temporaryNumber = "";
        console.log("tempNum: " + temporaryNumber);
      } else {
        operandA = operate(operandA, operandB, operator);
        operandB = 0;
        console.log("opA: " + operandA);
        temporaryNumber = "";
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
        temporaryNumber = "";
      } else {
        displayValue = parseFloat(temporaryNumber);
      }

      display.textContent = displayValue;
      console.log("opA: " + operandA);
      console.log("opB: " + operandB);
      console.log("tempNum: " + temporaryNumber);
      
    });
  } else if (button.className === "clear") {
    button.addEventListener("click", () => {
      displayValue = "";
      temporaryNumber = "";
      operandA = 0;
      operandB = 0;
      operator = "";
      display.textContent = 0;
    });
  } else if (button.className === "decimal") {
    button.addEventListener("click", () => {
      if (!temporaryNumber.includes(".")) {
        if (temporaryNumber.length == 0) {
          temporaryNumber += "0.";
        } else {
          temporaryNumber += ".";
        }
        displayValue = temporaryNumber;
        display.textContent = displayValue;
      }
    });
  }
});
