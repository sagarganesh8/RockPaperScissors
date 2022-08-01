







const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let yourChoice;
let computerChoice;
let result;


const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();

}))


function generateComputerChoice() {

  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 ;

  if(randomNumber ===1){
    computerChoice = "rock";
  }
if(randomNumber ===2){
  computerChoice = "paper";
}
if(randomNumber ===3){
  computerChoice = "scissor";
}
computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
  if(computerChoice === userChoice){
    result = "It'a Draw";
  }
  if(computerChoice ==="rock" && userChoice === "scissor"){
    result = "You Lose..!!!";
  }
  if(computerChoice ==="rock" && userChoice === "paper"){
    result = "You Win..!!!";
  }
  if(computerChoice ==="scissor" && userChoice === "paper"){
    result = "You Win..!!!";
  }
  if(computerChoice ==="scissor" && userChoice === "rock"){
    result = "You Lose..!!!";
  }
  if(computerChoice ==="paper" && userChoice === "scissor"){
    result = "You Win..!!!";
  }
  if(computerChoice ==="paper" && userChoice === "rock"){
    result = "You Lose..!!!";
  }

  resultDisplay.innerHTML = result;
}














// getComputerChoice() {
    

// }

// function playRound(playerSelection, computerSelection) {
    
//   }
   
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));