'use strict';

const form = document.querySelector('form');
const fname= document.querySelector('input[name=firstname]');
const lname = document.querySelector('input[name=lastname]');


form.addEventListener('submit', function(evt) {
    evt.preventDefault()
    document.getElementById("target").textContent = 'Your name is ' +fname.value+ ' ' +lname.value
});
