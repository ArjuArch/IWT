let expression = "";

      function appendNumber(number) {
        expression += number;
        updateDisplay();
      }

      function updateDisplay() {
        document.getElementById("display").innerText = expression;
      }

      function deleteNumber() {
        expression = expression.slice(0, -1);
        updateDisplay();
      }

      function clearDisplay() {
        expression = "";
        updateDisplay();
      }

      function performOperation(op) {
        expression += op;
        updateDisplay();
      }

      function calculateResult() {
        try {
          const result = eval(expression);
          expression = result.toString();
          updateDisplay();
        } catch (error) {
          expression = "Error";
          updateDisplay();
        }
      }