let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber)
const userInput = document.querySelector('#guessfield')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess  =   parseInt(userInput.value)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  // The alert() method in JavaScript displays a modal dialog box with a message and an OK button. It’s often used to show information or warnings that require user acknowledgment before proceeding.
if(isNaN(guess)){
  alert("please enter a valid number")
}else if(guess<1){
  alert("please enter a number more than 1")
}
else if(guess>100){
  alert("please enter a number less than 100")
}
else{
  prevGuess.push(guess)
  if(numGuess === 11){
    displayGuess(guess)
    displayMessages(`game Over . Random number was ${randomNumber}`)
    endGame()
  }else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessages(`you guessed it right`)
    endGame()
  }else if (guess < randomNumber){
    displayMessages(`number is too low`)
  }else if (guess > randomNumber){
    displayMessages(`number is toooooo high`)
  }

}
function displayGuess(guess){
  userInput.value = ``
  guessSlot.innerHTML += `${guess}       `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessages(message){
lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
  userInput.value = ``
  userInput.setAttribute('disabled','')
  // classList.add() is a JavaScript method used to add one or more CSS classes to an HTML element.
//   Result:

// <p id="text" class="highlight">Hello World</p>

// The text becomes red and bold because the highlight class is added.
  p.classList.add('button')
  p.innerHTML =  `<h2 id = "newgame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame();
}
function newGame(){
const newGameButton = document.querySelector('#newgame')
newGameButton.addEventListener('click', function(e){
   randomNumber = parseInt(Math.random()*100+1)
   prevGuess = []
   numGuess = 1
   guessSlot.innerHTML = ''
   remaining.innerHTML = `${11 - numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame = true
})
}
