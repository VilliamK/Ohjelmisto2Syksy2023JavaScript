'use strict';

const names = ['John', 'Paul', 'Jones'];
const div = document.querySelector("#target");

let html = ``

for (let i = 0; i < names.length; i++) {
    html += `<li>${names[i]}</li>`
}

div.innerHTML = html