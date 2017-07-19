const ids = [
  '.panel-left-top',
  '.panel-right-top',
  '.panel-left-bottom',
  '.panel-right-bottom'
]

const sections = ids.map(id => document.querySelector(id))
let current = 0

let unregister = null

attachHandler(handler)

function handler (event, direction) {
  if (direction === 'down') {
    current = current < sections.length - 1 ? current + 1 : current
  } else {
    current = current ? current - 1 : 0
  }

  removeHanlder()
  smoothScroll(sections[current], 500, attachHandler)
}

function attachHandler () {
  unregister = onScrollDirection(handler)
}

function removeHanlder () {
  if (unregister) unregister()
  unregister = null
}

function onScrollDirection (fn) {
  let lastScrollPos = window.pageYOffset

  function scrollHandler (event) {
    const direction = window.pageYOffset > lastScrollPos ? 'down' : 'up'

    lastScrollPos = window.pageYOffset

    fn(event, direction)
  }

  window.addEventListener('scroll', scrollHandler)

  return function () {
    window.removeEventListener('scroll', scrollHandler)
  }
}
