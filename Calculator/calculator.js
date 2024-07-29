//Welcome to the Calculater Bonanza
console.log("script started") // Debugging a calculator is wild

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

function handleNumber(number) {
    currentInput += number;
}


function handleOperator(op) {
    firstOperand = Number(currentInput);
    operator = op;
    currentInput = '';

}



function computeResult() {
    secondOperand = Number(currentInput);

    switch (operator) {
        case '+':
            result = Number(firstOperand) + (secondOperand);
            break;
        case '-':
            result = Number(firstOperand) - (secondOperand);
            break;
        case '/':
            result = Number(firstOperand) / (secondOperand);
            break;
        case '*':
            result = Number(firstOperand) * (secondOperand);
            break;

    }

    currentInput = result.toString();
    console.log(result);
}

function resetCalc() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    result = null;
}

//Victory