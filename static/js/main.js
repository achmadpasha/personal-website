// animate on scroll
AOS.init();


// dropdown menu
const menuToggle = document.querySelector('#toggle');
const menuItem = document.querySelector('#menu-item');

menuToggle.addEventListener('click', function() {
  menuItem.classList.toggle('show');
});


// auto type
const type = new Typed('#autotype', {
  strings: ['Tech Enthusiast', 'Programmer', 'Junior Web Developer'],
  typeSpeed: 40,
  backSpeed: 20,
  loop: true
})


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