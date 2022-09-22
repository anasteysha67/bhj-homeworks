"use strict";

let productQuantity = document.getElementsByClassName("product__quantity-value");
let controlInc = document.getElementsByClassName("product__quantity-control_inc");
let controlDec = document.getElementsByClassName("product__quantity-control_dec");

for (let i = 0; i < productQuantity.length; i++) {

   controlInc[i].addEventListener("click", () => {
      productQuantity[i].textContent++;
   })
   controlDec[i].addEventListener("click", () => {
      productQuantity[i].textContent--;

      if (productQuantity[i].textContent < "1") {
         productQuantity[i].textContent = "1"
      }
   });

   const addProductButton = document.getElementsByClassName("product__add");

   addProductButton[i].addEventListener("click", () => {

      if (productQuantity[i].textContent === "0") {
         return;
      }
      let cartProducts = document.querySelector(".cart__products");
      let product = document.getElementsByClassName("product");

      for (let j = 0; j < cartProducts.children.length; j++) {
         if (cartProducts.children[j].dataset.id === product[i].dataset.id) {
            let cartProductsCount = cartProducts.children[j].querySelector(".cart__product-count").textContent;
            let newProductValue = Number(cartProductsCount) + Number(productQuantity[j].textContent);

            return cartProducts.children[j].querySelector(".cart__product-count").textContent = newProductValue;
         }
      }

      cartProducts.insertAdjacentHTML("beforeend", `
            <div class="cart__product" data-id="${product[i].dataset.id}">
                <img class="cart__product-image" src="${product[i].querySelector("img").getAttribute('src')}">
                <div class="cart__product-count">${productQuantity[i].textContent}</div>
            </div>`);
   })
};