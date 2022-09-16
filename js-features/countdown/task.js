'use strict'

const timer = document.getElementById('timer');
let interval = null;

function timeCounter() {
   if (timer.textContent == 0) {
      alert("Вы победили в конкурсе");
      
   }
   let interval = setTimeout(timeCounter, 1000, --timer.textContent);
}
setTimeout(timeCounter, 1000);