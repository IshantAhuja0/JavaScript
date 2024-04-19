let RandonNumber=parseInt(Math.random()*100+1);
// console.log(RanNumber)
const submit=document.querySelector('button');
const previousGuess=document.querySelector('#previousGuess');
const remainGuess=document.querySelector('#remainGuess');
const userInput=document.querySelector('.userInput');
const result=document.querySelector('.result');
const lowOrHigh=document.querySelector('#loworhigh');
const p=document.createElement('p');
let prevGuess=[];
let noOfGuess=1;
let playGame=true;
if(playGame){
   submit.addEventListener('click',function(event){
   event.preventDefault();
   const guess = parseInt(userInput.value);
   console.log(guess);
   validGuess(guess);
  })
}
function validGuess(guess){
if(isNaN(guess) && guess<1 && guess>100){
  alert(`Please enter a valid number`);
}
else if(guess>100){
  alert(`Please enter a less than 100`);
}
else  if( guess<1){
  alert(`Please enter a greater than 0`);
}
else{
  prevGuess.push(guess);
  if(noOfGuess===11){
    displayGuess(guess)
    displayMsg(`Game Over! . Number was ${RandonNumber}`);
    endGame();
  }
  else{
    displayGuess(guess);
    checkGuess(guess)
  }
}
}
function checkGuess(guess){
  if(guess===RandonNumber){
    displayMsg(`You guessed it right!`)
  }
  else if(guess<RandonNumber){
    displayMsg(`Your guessed number is TOO Low.`)
  }
  else if(guess>RandonNumber){
    displayMsg(`Your guessed number is TOO High.`)
  }
}
function displayGuess(guess){
  userInput.value='';
  previousGuess.innerHTML += `${guess} , `;
  noOfGuess++;
  remainGuess.innerHTML=`Guesses Remaining : ${11 - noOfGuess}`;
}
function displayMsg(message){
  lowOrHigh.innerHTML=`${message}`;
}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h4 class="newGameBtn">New Game</h4>`;
  result.appendChild(p);
  playGame=false;
  newGame();
}
function newGame(){
  const newGameBtn=document.querySelector('.newGameBtn');
  newGameBtn.addEventListener('click',function(event){
  RandonNumber=parseInt(Math.random()*100+1);
  prevGuess=[];
  noOfGuess=1;
  previousGuess.value='';
  remainGuess.innerHTML=`Guesses Remaining : ${11 - noOfGuess}`;
  userInput.removeAttribute('disabled');
  result.removeChild(p);
  playGame=true;
  })
}

