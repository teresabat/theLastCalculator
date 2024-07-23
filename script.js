document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".calculator__display");
  const buttons = document.querySelectorAll("button");
  let currentValue = "0";
  let previousValue = "";
  let operator = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;

      if (value === "clear") {
        currentValue = "0";
        previousValue = "";
        operator = "";
      } else if (value === "pos-neg") {
        if (currentValue.startsWith("-")) {
          currentValue = currentValue.substring(1);
        } else {
          currentValue = "-" + currentValue;
        }
      } else if (value === "%") {
        currentValue = (parseFloat(currentValue) / 100).toString();
      } else if (["/", "*", "-", "+"].includes(value)) {
        if (operator !== "") {
          calculate();
        }
        previousValue = currentValue;
        currentValue = "0";
        operator = value;
      } else if (value === "=") {
        calculate();
        operator = "";
      } else {
        if (currentValue === "0") {
          currentValue = value;
        } else {
          currentValue += value;
        }
      }
      display.textContent = currentValue;
    });
  });

  function calculate() {
    let result = 0;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    switch (operator) {
      case "/":
        result = prev / current;
        break;
      case "*":
        result = prev * current;
        break;
      case "-":
        result = prev - current;
        break;
      case "+":
        result = prev + current;
        break;
      default:
        return;
    }

    currentValue = result.toString();
    previousValue = "";
  }
});
