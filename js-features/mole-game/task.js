"use strict";

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index < 10; index++) {
   let hole = document.getElementById(`hole${index}`);
   function getHole() {
      return hole;
   }
   getHole(index);

   hole.onclick = function () {
      if (hole.className.includes("hole_has-mole")) {
         dead.textContent++;
      } else {
         lost.textContent++;
      }

      if (dead.textContent == 10) {
         alert("Победа!");
         dead.textContent = 0;
         lost.textContent = 0;
      }

      if (lost.textContent == 5) {
         alert("Вы проиграли!");
         dead.textContent = 0;
         lost.textContent = 0;
      }
   }
}