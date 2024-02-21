//Generate 2 random numbers between 1 and 10
let randomNumOne = parseInt((Math.random()*10)+1);
let randomNumTwo = parseInt((Math.random()*10)+1);
let Answer = parseInt(randomNumOne + randomNumTwo);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame){
    subt.addEventListener('click', function(e){
        e.preventDefault();
        //Grab guess from user
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else {
        //Keep record of number of attempted guesses
        previousGuesses.push(guess);
        //Check to see if game is over
        if (numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! The number was ${Answer}`);
            endGame();
        } else {
        //Display previous guessed numbers
        displayGuesses(guess);
        //Check guess and display if wrong
        checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //Display clue if guess is too high or too low
    if (guess === Answer){
        displayMessage(`Well Done! The number is ${Answer}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low, try again!`);
    } else if (guess > randomNumber) {
        displayMessage(`Too high, try again!`);
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message){
        lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    //Clear user input
    userInput.value = '';
    //Disable user input button
    userInput.setAttribute('disabled', '');
    //Display Start new Game Button
          p.classList.add('btn');
          p.innerHTML = `<a id="newGame">Start New Game</a>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        //Pick a new random number
        randomNumOne = parseInt((Math.random()*10)+1);
	randomNumTwo = parseInt(Math.random()*10)+1);
	Answer = parseInt(randomNumOne + randomNumTwo);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
//Allow to restart game with restart button
//Change DIV to a form so it can accept the enter key

//NOTES:
//NaN != NaN
