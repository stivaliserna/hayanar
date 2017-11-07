'use strict'

var sizes = [
  { columns: 1, gutter: 0 },
  { mq: '576px', columns: 2, gutter: 15 },
  { mq: '768px', columns: 2, gutter: 15 },
  { mq: '992px', columns: 3, gutter: 15 },
  { mq: '1200px', columns: 3, gutter: 15 }
]

// create an instance

var instance = Bricks({
  container: '.gallery-container',
  packed: 'data-packed', // if not prefixed with 'data-', it will be added
  sizes: sizes
})

// bind callbacks

instance
  .on('pack', function () {})
  .on('update', function () {})
  .on('resize', function (size) {
    setTimeout(function () {
      instance.pack()
    }, 100)
  })

// start it up, when the DOM is ready
// note that if images are in the grid, you may need to wait for document.readyState === 'complete'

document.addEventListener('DOMContentLoaded', function (event) {
  instance
    .resize(true) // bind resize handler
    .pack() // pack initial items
})
