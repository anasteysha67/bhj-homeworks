"use strict";

const chatSide = document.querySelector(".chat-widget__side");
const chatWidget = document.querySelector(".chat-widget");
const inputWidget = document.querySelector(".chat-widget__input");
const chatMessages = document.querySelector(".chat-widget__messages");


chatSide.addEventListener("click", function () {
   chatWidget.classList.add("chat-widget_active");
});


let messages = [
   "Здравствуйте! До свидания!",
   "Пока ничего не купите, даже не думайте сюда писать!",
   "Оставьте телефон для связи, и мы Вам обязательно не перезвоним",
   "Включите блютуз, для передачи Вам мозга.",
   "Mяу"
];


inputWidget.addEventListener("keydown", event => {
   if (event.key === "Enter" && inputWidget.value != '') {
      let time = new Date();
      time = `${time.getHours()}:${time.getMinutes()}`;  
      chatMessages.innerHTML += `
			<div class="message message_client">
				<div class="message__time">${time}</div>
				<div class="message__text">${inputWidget.value}</div>
			</div>`;
      chatMessages.innerHTML += `
			<div class="message">
				<div class="message__time">${time}</div>
				<div class="message__text">
					${getRandomMessage()}
				</div>
			</div>`;
      inputWidget.value = " "; 
   }
});


const getRandomMessage = () => {
   let min = 0;
   let max = messages.length - 1;
   return messages[Math.floor(Math.random() * (max - min + 1)) + min];
}