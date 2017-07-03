const nav = document.querySelector('.sticky-menu')
const background = document.querySelector('.full-background')

function changeNavbarColor () {
  if (document.body.scrollTop > background.offsetHeight) {
    nav.classList.add('scrolling')
  } else {
    nav.classList.remove('scrolling')
  }
}

window.addEventListener('scroll', changeNavbarColor)
