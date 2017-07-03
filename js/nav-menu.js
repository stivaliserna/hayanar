var navToggle = document.getElementsByClassName('nav-btn-toggle')[0]
var navMenu = document.getElementsByClassName('js-site-nav')[0]
var isMouseDown = false

navToggle.addEventListener('click', function () {
  this.focus()
  navMenu.classList.toggle('js-site-nav--open')
  navMenu.focus()
})

navMenu.addEventListener('mousedown', function () {
  isMouseDown = true
})

navMenu.addEventListener('mouseup', function () {
  isMouseDown = false
})

navMenu.addEventListener('mouseleave', function () {
  isMouseDown = false
})

navMenu.addEventListener('blur', function () {
  if (!isMouseDown) {
    navMenu.classList.remove('js-site-nav--open')
  }
}, true)
