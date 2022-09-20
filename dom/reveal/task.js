"use strict"

let advant = document.querySelectorAll(".reveal");

for (let i = 0; i < advant.length; i++) {
   window.addEventListener("scroll", () => {
      if (advant[i].getBoundingClientRect().top < window.innerHeight) {
         advant[i].classList.add("reveal_active");
      } else {
         advant[i].classList.remove("reveal_active");
      }
   })
}
