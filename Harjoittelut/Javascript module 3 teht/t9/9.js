'use strict';

function calculate() {

    const input = document.getElementById('calculation').value;

    if (input.includes('+') || input.includes('-') || input.includes('*') || input.includes('/')) {
        const operands = input.split(/[\+\-\*\/]/);
        const operator = input.split('').find(char => ['+','-','*','/'].includes(char));
        const operators = {
            '+': (a, b) => a+b,
            '-': (a, b) => a-b,
            '*': (a, b) => a*b,
            '/': (a, b) => a/b
        };

        const result = operators[operator](parseInt(operands[0]), parseInt(operands[1]));

        document.getElementById('result').textContent = 'Result: ' +result;

    } else {
        document.getElementById('result').textContent = 'Invalid operator'

    }

}
const start = document.getElementById('start')
start.addEventListener('click', calculate)