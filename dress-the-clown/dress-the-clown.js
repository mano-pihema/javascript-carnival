// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
let headIndex = 0
var clothingIndex = [0, 1, 2]

let head = document.getElementById('head')
let body = document.getElementById('body')
let feet = document.getElementById('feet')

//document.addEventListener('keydown', changeClownHead(e))

//head.onkeydown = changeClownHead

document.addEventListener('keydown', function (e) {
  //console.log(e.key)
  if (e.key === 'ArrowRight') {
    changeClownHead()
  }
  if (e.key === 'ArrowLeft') {
    reverseChangeClownHead()
  }
  if (e.key === 'ArrowUp') {
    clothingIndex++
  } else if (e.key === 'ArrowDown') {
    clothingIndex--
  }
})

function changeClownHead() {
  headIndex++

  head.src = './images/head' + headIndex + '.png'
  if (headIndex > 5) {
    headIndex = 0
  }
  console.log(headIndex)
}

function reverseChangeClownHead() {
  --headIndex

  head.src = './images/head' + headIndex + '.png'

  if (headIndex <= 0) {
    headIndex = 6
  }
  console.log(headIndex)
}

function changeClothing() {
  if (clothingIndex == 0) {
    head.src = './images/head' + headIndex + '.png'
  }
  if (clothingIndex == 1) {
    head.src
  }
  if (clothingIndex == 2) {
    head.src
  }
}
