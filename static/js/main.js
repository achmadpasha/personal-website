// dropdown menu
const menuToggle = document.querySelector('#toggle');
const menuItem = document.querySelector('#menu-item');

menuToggle.addEventListener('click', function() {
  menuItem.classList.toggle('show');
});


// auto type
document.addEventListener("DOMContentLoaded", function () {
  const autoType = document.getElementById("autotype");
  const strings = ["Tech Enthusiast", "Programmer", "Junior Web Developer"];

  let pipe = true;
  let index = 0;
  let speed = 70;
  let isTyping = true;
  let textIndex = 0;

  function typeText() {
    let text = strings[textIndex];
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
        textIndex = (textIndex + 1) % strings.length;
      }
    }

    setTimeout(typeText, speed);
  }

  typeText();
});


// project accordion
const viewProject = document.querySelectorAll('.view-btn');
const projectDesc = document.querySelectorAll('.project-description');
const chevron = document.querySelectorAll('.chevron');

for (let i = 0; i < viewProject.length; i++) {
  viewProject[i].addEventListener('click', function() {
    projectDesc[i].classList.toggle('show');
    chevron[i].classList.toggle('rotate');
  });
};