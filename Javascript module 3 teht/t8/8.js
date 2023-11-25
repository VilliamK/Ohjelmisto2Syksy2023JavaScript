'use strict';


const start = document.getElementById('start')
const pE = document.getElementById('result')


function calculate(){
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const operation = document.getElementById('operation').value;

let result;
if (operation === 'add') {
    result = num1 + num2;
} else if (operation === 'sub') {
    result = num1 - num2;
} else if (operation === 'multi') {
    result = num1 * num2;
} else if (operation === 'div'){
    result = num1 / num2;
}
pE.textContent = 'Result: ' + result
}

start.addEventListener('click', calculate)