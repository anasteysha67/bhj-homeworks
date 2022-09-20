"use strict";

const link = document.querySelectorAll(".font-size");
const book = document.getElementById("book");

for (let i = 0; i < link.length; i++) {

   link[i].addEventListener("click", (event) => {
      event.preventDefault();

      const linkActive = document.querySelector(".font-size_active");
      linkActive.classList.remove("font-size_active");
      link[i].classList.add("font-size_active");

      if (link[i].dataset.size === "small") {
         book.classList.remove("book_fs-big");
         book.classList.add("book_fs-small");
      } else if (link[i].dataset.size === "big") {
         book.classList.remove("book_fs-small");
         book.classList.add("book_fs-big");
      } else {
         book.classList.remove("book_fs-small");
         book.classList.remove("book_fs-big");
      }
   });
}