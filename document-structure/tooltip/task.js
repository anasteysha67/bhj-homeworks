"use strict";

const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach((elem) => {
   elem.addEventListener("click", (e) => {
      e.preventDefault();

      if (elem.childNodes.length > 1) {
         elem.removeChild(elem.childNodes[1]);
      } else {
         hasTooltip.forEach((link => {
            if (link.childNodes.length > 1) link.removeChild(link.childNodes[1]);
         }));

         let place = String(elem.offsetLeft) + "px";
         console.log(elem.getBoundingClientRect().top);

         const tip = document.createElement("div");
         tip.textContent = elem.getAttribute("title");
         tip.classList.add("tooltip");
         tip.classList.add("tooltip_active");
         tip.style.marginLeft = place;
         tip.style.position = "absolute";
         elem.appendChild(tip);
      }
   })
})