// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
let Index = 0
var clothingIndex = 0
//console.log(clothingIndex)
let head = document.getElementById('head')
let body = document.getElementById('body')
let feet = document.getElementById('feet')

document.addEventListener('keydown', function (e) {
  //console.log(e.key)
  if (e.key === 'ArrowRight') {
    changeClothes()
  }
  if (e.key === 'ArrowLeft') {
    reverseChangeClothes()
  }
  if (e.key === 'ArrowUp') {
    clothingIndex++
    Index = 0
    if (clothingIndex > 2) {
      clothingIndex = 0
    }
    console.log('clothing Index: ' + clothingIndex)
  } else if (e.key === 'ArrowDown') {
    clothingIndex--
    Index = 0
    if (clothingIndex < 0) {
      clothingIndex = 2
    }
    console.log('clothing Index: ' + clothingIndex)
  }
})

// function zero(index1, limit, set) {
//   if (index1 > limit) {
//     index1 = set
//   }
// }

function changeClothes() {
  Index++

  if (Index > 5) {
    Index = 0
  }
  console.log('Index: ' + Index)
  //zero(Index, 5, 0)
  changeClothingIndex()
}

function reverseChangeClothes() {
  Index--

  if (Index < 0) {
    Index = 5
  }
  console.log('Index: ' + Index)
  //zero(0,Index, 5)
  changeClothingIndex()
}

function changeClothingIndex() {
  if (clothingIndex == 0) {
    head.src = './images/head' + Index + '.png'
  }
  if (clothingIndex == 1) {
    body.src = './images/body' + Index + '.png'
  }
  if (clothingIndex == 2) {
    feet.src = './images/shoes' + Index + '.png'
  }
}
