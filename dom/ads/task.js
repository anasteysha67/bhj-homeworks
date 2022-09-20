"use strict";

const rotators = document.querySelectorAll(".rotator__case");
let number = 0;

function showNextCase() {
   rotators[number].classList.remove("rotator__case_active");
   number = (number === rotators.length - 1) ? 0 : number + 1;
   rotators[number].classList.add("rotator__case_active");
};

setInterval(showNextCase, 1000);