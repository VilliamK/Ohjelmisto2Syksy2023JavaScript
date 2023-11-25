'use strict';

//innerTarget = document.getElementById("target")
//innerTarget.innerHTML =
//   `<li>First item</li>
//     <li>Second item</li>
//     <li>Third item</li>`

const div = document.querySelector('#target');
const html =
    `<li>First item</li>
     <li>Second item</li>
     <li>Third item</li>`;

div.innerHTML = html;