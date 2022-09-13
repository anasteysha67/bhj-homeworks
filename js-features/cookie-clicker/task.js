"use strict"

const img = document.querySelector("img");
const clickCounter = document.getElementById("clicker__counter");
let click = (clickCounter.textContent = 0);
img.onclick = function () {
  if (img.width === 200) {
    img.width = 300;
    clickCounter.textContent = ++click;
  } else if (img.width !== 200) {
    img.width = 200;
    clickCounter.textContent = ++click;
  }
};