// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// var x = document.getElementsById('table').rows[0].cells.length
// console.log(x)

// var x = document.getElementById('myTable').rows[0].cells
// x[0].innerHTML = 'NEW CONTENT'

let cells = document.getElementsByTagName('td')
console.log(cells)
//cells.innerHTML[1] = 'first'

function functionToGetRandomNumber() {
  let rand = Math.floor(Math.random() * 24 + 1)
  return rand
}

var randomIndex = functionToGetRandomNumber()
var randomCell = cells[randomIndex]
console.log(randomCell)

let node = document.getElementById('mole')

randomCell.appendChild(node)

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = whackedMole
}

var audio = new Audio()
audio.src = 'whack-audio.wav'

function whackedMole(e) {
  let whack = e.target

  console.log(whack)
  if (whack.id == 'mole') {
    audio.play()
    var randomIndex = functionToGetRandomNumber()
    var randomCell = cells[randomIndex]

    let node = document.getElementById('mole')

    randomCell.appendChild(node)
  }
}
