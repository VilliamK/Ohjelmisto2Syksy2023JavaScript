'use strict';

const hoverElement = document.getElementById("trigger");

const  imageElement = document.getElementById("target");

const originalImage = "img/picA.jpg";
const hoverImage = "img/picB.jpg";



function over(evt){

    imageElement.src = hoverImage;
}

function out(evt) {

    imageElement.src = originalImage;
}

hoverElement.addEventListener('mouseover', over);
hoverElement.addEventListener('mouseout', out);