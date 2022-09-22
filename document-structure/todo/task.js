"use strict";

const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const tasksAdd = document.getElementById("tasks__add");

tasksAdd.addEventListener("click", addTask);

function addTask(event) {
   if (event.type === "click") {
      event.preventDefault();
   }
   if ((event.code === "Enter" || event.type === "click") && taskInput.value !== "") {
      const task = document.createElement("div");
      task.classList.add("task");
      task.innerHTML = `<div class="task__title">
      ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>`;
      tasksList.appendChild(task);
      taskInput.value = "";
      task.querySelector(".task__remove").addEventListener("click", removeTask);
   }
}

function removeTask() {
   this.closest(".task").remove();
};