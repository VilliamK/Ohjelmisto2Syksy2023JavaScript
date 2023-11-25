'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

//const div = document.querySelector("#target");

//let html = ``;

//for (let i= 0; i < students.length; i++) {
// html += `<option value="${students[i].id}">${students[i].name}</option>`
//}

//div.innerHTML = html

let target = document.getElementById("target");

for (let i = 0; i < students.length; i++) {
  const optionElement = document.createElement("option");
  optionElement.value = students[i].id;
  optionElement.textContent = students[i].name;
  target.appendChild(optionElement);
}

