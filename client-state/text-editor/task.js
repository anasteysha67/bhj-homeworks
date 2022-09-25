const editor = document.getElementById('editor');
const clearBtn = document.querySelector('button');

document.addEventListener("DOMContentLoaded", event => {
  if (localStorage.text !== null) {
    editor.value = localStorage.text;
  }

  editor.addEventListener('change', event => {
  localStorage.setItem('text', editor.value)
  });
});

clearBtn.addEventListener('click', event => {
  localStorage.removeItem('text');
  editor.value = null;
});