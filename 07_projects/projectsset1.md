# Projects related to Dom
 ## project link

 # solution code 
 ## project 1 
 ``` javascript 

 console.log("utkarsh")
 const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## project 2 solution
``` javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```
## project 3 solution 
``` javascript 
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  //console.log(Date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleDateString();
}, 1000);

```

## project 4 solution

``` javascript 

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;
if(playGame){
  submit.addEventListener('click' , function(e){
    e.preventDefault()
  const guess = parseInt(userInput.value)
  console.log(guess);
  validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`please enter a valid number`)
  } else if(guess < 1){
    alert(`please enter a valid number`)
  }
   else if(guess > 100){
    alert(`please enter a valid number`)
  }
  else {
    prevGuess.push(guess)
    if(numGuess === 11 ){
      displayGuess(guess);
      displayMessage(`game Over , random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You gussed it right`)
    endGame()
  }else if ( guess < randomNumber){
    displayGuess(`Number is too low`)
  }
  else if(guess > randomNumber){
    displayGuess(`Number is too high`)
  }

}
function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}  `;
  numGuess++;
  remaning.innerHTML = ` ${11 - numGuess}`

}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;

}
function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML= `<h2 id = "newGame">Start new game</h2>`;
  startOver.appendChild(p)
  playGame = false
newGame();

}
function newGame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click', function(e){
   randomNumber = parseInt(Math.random() * 100 + 1);
   prevGuess = []
   numGuess = 1
   guessSlot.innerHTML = ''
   remaning.innerHTML = `${11 - numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p);

  playGame = true
 })


}
```
## project 5 solution

```javascript 
//generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#';
  for(let i = 0; i < 6; i++){
     color += hex[Math.floor(Math.random()*16)]
  }
  return color;
};
//console.log(randomColor());
let intervalId;
const startChangingcolor = function(){
  if(!intervalId){
  intervalId= setInterval(changeBgcolor , 1000);
  }

  function changeBgcolor(){
    document.body.style.backgroundColor = randomColor();
  }

}
const stopchangingColor = function (){
clearInterval(intervalId);
 intervalId = null;
}
document.querySelector('#start').addEventListener('click' , startChangingcolor)
document.querySelector('#stop').addEventListener('click' , stopchangingColor)

```