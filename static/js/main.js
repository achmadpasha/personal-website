const menuToggle = document.querySelector('#toggle')
const menuItem = document.querySelector('#menu-item')

menuToggle.addEventListener('click', function() {
  menuItem.classList.toggle('show')
})


document.addEventListener("DOMContentLoaded", function () {
  const autoType = document.getElementById("autotype");
  const textArray = ["Tech Enthusias", "Programmer", "Junior Web Developer"];

  let pipe = true;
  let index = 0;
  let speed = 75;
  let isTyping = true;
  let textIndex = 0;

  function typeText() {
    let text = textArray[textIndex];
    if (pipe) {
      text += "|";
    }

    if (isTyping) {
      if (index < text.length) {
        autoType.value += text[index];
        index++;
      } else {
        isTyping = false;
      }
    } else {
      if (index > 0) {
        autoType.value = text.slice(0, index - 1);
        index--;
      } else {
        isTyping = true;
        textIndex = (textIndex + 1) % textArray.length;
      }
    }

    setTimeout(typeText, speed);
  }

  typeText();
});