'use strict';

const button = document.querySelector('button');

//button.onclick = function () {
//   alert('Button Clicked')
//}

button.addEventListener('click', function (evt){
    alert('Element ' +evt.currentTarget.tagName + ' was clicked');});