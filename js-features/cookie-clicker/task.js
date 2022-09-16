'use strict'

const img = document.querySelector('img');
let clickerElem = document.getElementById('clicker__counter');
let clickerCounter = clickerElem.textContent;

img.onclick = function () {
  clickerCounter++;
  if (clickerCounter % 2 === 0) {
    img.width = '200';
    
  } else {
    img.width = '300';
  }
  return (clickerElem.textContent = clickerCounter);
};
