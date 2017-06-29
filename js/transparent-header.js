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

// const nav = document.querySelector('.navbar')
// const background = document.querySelector('.full-background').offsetHeight

// window.onscroll = function () { changeNavbarColor(background) }

// function changeNavbarColor (background) {
//   if (document.body.scrollTop > background || document.documentElement.scrollTop > background) {
//     nav.classList.add('scrolling')
//   } else {
//     nav.classList.remove('scrolling')
//   }
// }
