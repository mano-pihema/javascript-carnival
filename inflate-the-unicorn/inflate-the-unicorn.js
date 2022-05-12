// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
  // unicorns[i].onclick = hello
  // function hello() {
  //   console.log('hello unicorn' + unicorns[i])
  // }
}

var unicornState = [
  './images/unicorn-0.png',
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
  './images/unicorn-0.png',
]
let currentImage = 0
//let maxImage = 3
//let unicorn1 = unicorns[0]
// let unicorn2 = unicorns[1]
// let unicorn3 = unicorns[2]
//console.log()
//Using the onclick method to call it, you will need to write a function that gets called every time you click on one of the unicorns.

//In order to change the unicorn to the correct next image, you're going to need to keep track of the current number that each unicorn is on and use this to decide which image to change to.
//------------------------------------------------------------------------------------------------------------------
function unicornClicked(e) {
  let clickd = e.target

  //console.log(clickd)
  //let index = unicornState.length-1

  if (clickd.id == 'unicorn-0') {
    currentImage++
    clickd.src = unicornState[currentImage]
    if (currentImage > 3) {
      currentImage = 0
      alert(clickd.id + 'is full')
    }
  }

  if (clickd.id == 'unicorn-1') {
    currentImage++
    clickd.src = unicornState[currentImage]
    if (currentImage > 3) {
      currentImage = 0
      alert(clickd.id + 'is full')
    }
  }
  if (clickd.id == 'unicorn-2') {
    currentImage++
    clickd.src = unicornState[currentImage]
    if (currentImage > 3) {
      currentImage = 0

      alert(clickd.id + ' is full')
    }
  }
  // console.log(currentImage)

  // //currentImage = currentImage % index
  // if (currentImage == 4) {
  //   alert('unicorn is full')
  // }

  // clickd.src = unicornState[currentImage]

  //document.getElementsByClassName('inflate-an-image').src = 'unicorn-1.png'

  // for (
  //   let currentImage = 0;
  //   currentImage < unicornState.length - 1;
  //   currentImage++
  // ) {
  //   console.log(currentImage)

  //   clickd.src = unicornState[currentImage]
  //   currentImage++
  // }

  // if (currentImage == 0) {
  //   clickd.src = currentImage[currentImage]
  //   currentImage++
  //   if (currentImage == 3) {
  //     alert('unicorn is full')
  //   }
  // }
}

//use a var that could be an object or array that will change picture eact time its clicked

//need to return an alert when the unicorn is fully inflated.
