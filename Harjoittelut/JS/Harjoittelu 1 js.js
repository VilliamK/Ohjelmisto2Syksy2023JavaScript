'use strict';

const numero1 = +prompt("Anna ensimmäinen numero: ")
const numero2 = +prompt("Anna toinen numero: ")
const numero3 = +prompt("Anna kolmas numero: ")
const summa = numero1 + numero2 + numero3
const tulo = numero1 * numero2 * numero3
const keskisumma = summa / 3
document.querySelector('#target').innerHTML = 'Summa: ' + summa + '<br>' +
    'Tulo: ' + tulo + '<br>' +
    'Keskisumma: ' + keskisumma;
