let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
}

function setOperator(op) {
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (operator && firstOperand && currentInput) {
        let result;
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        clearDisplay();
        display.value = result;
    }
}