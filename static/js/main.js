const menuToggle = document.querySelector('#toggle')
const menuItem = document.querySelector('#menu-item')

menuToggle.addEventListener('click', function() {
  menuItem.classList.toggle('show')
})