let randomNumber = parseInt(Math.random()*100 +1)
console.log(randomNumber)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const remaining = document.querySelector('.lastResult')
const prevguesses = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

let attempt = 0
// let prevGuess = [];

const p = document.createElement('p');

let playgame = true;
if(playgame) 
{
  submit.addEventListener('click', (e)=> {
    e.preventDefault()
    let guess = parseInt(userInput.value)
    validateinput(guess)
    // console.log(guess)
    })
}
function validateinput(guess) {
  if (guess < 1){
    alert('enter a number greater than 0')
  }
  else if (guess > 100){
    alert('enter a number less than 101')
  }
  else if(isNaN(guess)){
    alert('enter a valid number')
  }
  else{
    // prevGuess.push(guess)
    if(attempt === 10){
      update(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endgame()
    }
    else {
      update(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  console.log(guess)
  if(guess === randomNumber){
    displayMessage(`You guessed it right`);
    endgame()
  }
  else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}
function update(guess){
  userInput.value = ''
  attempt++
  if(attempt === 1){ 
  prevguesses.innerHTML += `${guess}`}
  else{
  prevguesses.innerHTML += `, ${guess}`
  }
  remaining.innerHTML = `${10-attempt}`
}
function displayMessage(message){
  lowOrHi.innerHTML = `${message}`
}
function endgame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML = `<h1 id="newgame">start new game</h1>`
  p.style.cursor = "pointer"
  startOver.appendChild(p)
  playgame = false 
  newgame()
}
function newgame(){
  const newgamebutton = document.querySelector('#newgame')
  newgamebutton.addEventListener('click',()=>{
    userInput.value = ''
    prevguesses.innerHTML = ''
    attempt = 0
    remaining.innerHTML = `${10-attempt}`
    randomNumber = parseInt(Math.random()*100 +1)
    userInput.removeAttribute('disabled','')
    playgame = true
  })
}


